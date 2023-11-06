import type { Config } from 'tailwindcss';
import { getColors } from 'theme-colors';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md.mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'death-knight': { ...getColors('#C41F3B'), DEFAULT: '#C41F3B' },
        'demon-hunter': { ...getColors('#A330C9'), DEFAULT: '#A330C9' },
        druid: { ...getColors('#FF7D0A'), DEFAULT: '#FF7D0A' },
        evoker: { ...getColors('#33937F'), DEFAULT: '#33937F' },
        hunter: { ...getColors('#ABD473'), DEFAULT: '#ABD473' },
        mage: { ...getColors('#69CCF0'), DEFAULT: '#69CCF0' },
        monk: { ...getColors('#00FF96'), DEFAULT: '#00FF96' },
        paladin: { ...getColors('#F58CBA'), DEFAULT: '#F58CBA' },
        priest: { ...getColors('#FFFFFF'), DEFAULT: '#FFFFFF' },
        rogue: { ...getColors('#FFF569'), DEFAULT: '#FFF569' },
        shaman: { ...getColors('#0070DE'), DEFAULT: '#0070DE' },
        warlock: { ...getColors('#9482C9'), DEFAULT: '#9482C9' },
        warrior: { ...getColors('#C79C6E'), DEFAULT: '#C79C6E' }
      }
    }
  },
  plugins: []
};
export default config;
