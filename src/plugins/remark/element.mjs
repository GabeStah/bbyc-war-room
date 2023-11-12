import { visit } from 'unist-util-visit';

// Create an array of the enum values
const warcraftClasses = Object.values({
  'death-knight': 'death knight',
  'demon-hunter': 'demon hunter',
  druid: 'druid',
  evoker: 'evoker',
  hunter: 'hunter',
  mage: 'mage',
  monk: 'monk',
  paladin: 'paladin',
  priest: 'priest',
  rogue: 'rogue',
  shaman: 'shaman',
  warlock: 'warlock',
  warrior: 'warrior'
});

// Map the array to create the desired objects
const mappedClasses = warcraftClasses.map(name => ({
  id: new RegExp(`\\b${name}s?\\b`, 'gi'),
  element: 'Class',
  attributes: [
    {
      name: 'name',
      value: name
    }
  ]
}));

const mappings = [
  {
    id: /@boss/gi,
    element: 'Boss'
  },
  {
    id: /@critical/gi,
    element: 'Critical'
  },

  {
    id: /@countdown/gi,
    element: 'Countdown'
  },
  {
    id: /@dispel/gi,
    element: 'Dispel'
  },
  {
    id: /@interrupt/gi,
    element: 'Interrupt'
  },
  {
    id: /@mythic/gi,
    element: 'Mythic'
  },
  {
    id: /@tactics?/gi,
    element: 'Tactic'
  },
  {
    id: /@tips?/gi,
    element: 'Tip'
  },
  ...mappedClasses,
  {
    id: /\bnon-tanks?\b/gi,
    element: 'Role',
    attributes: [
      {
        name: 'role',
        value: 'non-tank'
      }
    ]
  },
  {
    id: /\btanks?\b/gi,
    element: 'Role',
    attributes: [
      {
        name: 'role',
        value: 'tank'
      }
    ]
  },
  {
    id: /\bhealers?\b/gi,
    element: 'Role',
    attributes: [
      {
        name: 'role',
        value: 'healer'
      }
    ]
  },
  {
    id: /\bdpss?\b/gi,
    element: 'Role',
    attributes: [
      {
        name: 'role',
        value: 'dps'
      }
    ]
  }
];

function createMdxElementNode(mapping, text) {
  const attributes =
    mapping.attributes?.map(attr => ({
      type: 'mdxJsxAttribute',
      name: attr.name,
      value: attr.value
    })) || [];

  // If text is provided, add it as an attribute
  if (text) {
    attributes.push({
      type: 'mdxJsxAttribute',
      name: 'text',
      value: text
    });
  }

  return {
    type: 'mdxJsxFlowElement',
    name: mapping.element,
    attributes: attributes,
    children: []
  };
}

export default function attacher() {
  return function transformer(tree) {
    mappings.forEach(mapping => {
      //const regex = new RegExp(`\\b${mapping.id}s?\\b`, 'gi');
      const regex = mapping.id;
      visit(tree, 'text', (node, index, parent) => {
        if (parent && typeof node.value === 'string') {
          let match;
          let lastIndex = 0;
          let hasReplacements = false;

          const newChildren = [];
          while ((match = regex.exec(node.value)) !== null) {
            const matchedText = match[0]; // Store the matched text
            const matchIndex = match.index;
            const beforeMatch = node.value.slice(lastIndex, matchIndex);

            if (beforeMatch) {
              newChildren.push({ type: 'text', value: beforeMatch });
            }

            // Pass the matched text to createMdxElementNode
            newChildren.push(createMdxElementNode(mapping, matchedText));
            hasReplacements = true;

            // Update lastIndex to be the end of the current match
            lastIndex = regex.lastIndex;
          }

          if (hasReplacements) {
            if (lastIndex < node.value.length) {
              newChildren.push({
                type: 'text',
                value: node.value.slice(lastIndex)
              });
            }

            // Replace the node with the new nodes
            parent.children.splice(index, 1, ...newChildren);
            // Reset regex's lastIndex to avoid infinite loop
            regex.lastIndex = 0;
            // Return the new index position after the replacements
            return index + newChildren.length;
          }
        }
      });
    });
  };
}
