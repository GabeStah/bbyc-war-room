import { TailwindColor } from '@/types/tailwind/TailwindColor';
import { WarcraftClass } from '@/types/tailwind/WarcraftClass';

const tailwindColors = {
  slate:
    'bg-slate-50 text-slate-600 ring-slate-500/10 dark:bg-slate-400/10 dark:text-slate-400 dark:ring-slate-400/20',
  gray: 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20',
  zinc: 'bg-zinc-50 text-zinc-600 ring-zinc-500/10 dark:bg-zinc-400/10 dark:text-zinc-400 dark:ring-zinc-400/20',
  neutral:
    'bg-neutral-50 text-neutral-600 ring-neutral-500/10 dark:bg-neutral-400/10 dark:text-neutral-400 dark:ring-neutral-400/20',
  stone:
    'bg-stone-50 text-stone-600 ring-stone-500/10 dark:bg-stone-400/10 dark:text-stone-400 dark:ring-stone-400/20',
  red: 'bg-red-50 text-red-600 ring-red-500/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20',
  orange:
    'bg-orange-50 text-orange-600 ring-orange-500/10 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/20',
  amber:
    'bg-amber-50 text-amber-600 ring-amber-500/10 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20',
  yellow:
    'bg-yellow-50 text-yellow-600 ring-yellow-500/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20',
  lime: 'bg-lime-50 text-lime-600 ring-lime-500/10 dark:bg-lime-400/10 dark:text-lime-400 dark:ring-lime-400/20',
  green:
    'bg-green-50 text-green-600 ring-green-500/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20',
  emerald:
    'bg-emerald-50 text-emerald-600 ring-emerald-500/10 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20',
  teal: 'bg-teal-50 text-teal-600 ring-teal-500/10 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20',
  cyan: 'bg-cyan-50 text-cyan-600 ring-cyan-500/10 dark:bg-cyan-400/10 dark:text-cyan-400 dark:ring-cyan-400/20',
  sky: 'bg-sky-50 text-sky-600 ring-sky-500/10 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/20',
  blue: 'bg-blue-50 text-blue-600 ring-blue-500/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20',
  indigo:
    'bg-indigo-50 text-indigo-600 ring-indigo-500/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20',
  violet:
    'bg-violet-50 text-violet-600 ring-violet-500/10 dark:bg-violet-400/10 dark:text-violet-400 dark:ring-violet-400/20',
  purple:
    'bg-purple-50 text-purple-600 ring-purple-500/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20',
  fuchsia:
    'bg-fuchsia-50 text-fuchsia-600 ring-fuchsia-500/10 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:ring-fuchsia-400/20',
  pink: 'bg-pink-50 text-pink-600 ring-pink-500/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20',
  rose: 'bg-rose-50 text-rose-600 ring-rose-500/10 dark:bg-rose-400/10 dark:text-rose-400 dark:ring-rose-400/20'
};

const wowColors = {
  'death-knight':
    'bg-death-knight-50 text-death-knight-600 ring-death-knight-500/10 dark:bg-death-knight-400/10 dark:text-death-knight-400 dark:ring-death-knight-400/20',
  'demon-hunter':
    'bg-demon-hunter-50 text-demon-hunter-600 ring-demon-hunter-500/10 dark:bg-demon-hunter-400/10 dark:text-demon-hunter-400 dark:ring-demon-hunter-400/20',
  druid:
    'bg-druid-50 text-druid-600 ring-druid-500/10 dark:bg-druid-400/10 dark:text-druid-400 dark:ring-druid-400/20',
  evoker:
    'bg-evoker-50 text-evoker-600 ring-evoker-500/10 dark:bg-evoker-400/10 dark:text-evoker-400 dark:ring-evoker-400/20',
  hunter:
    'bg-hunter-50 text-hunter-600 ring-hunter-500/10 dark:bg-hunter-400/10 dark:text-hunter-400 dark:ring-hunter-400/20',
  mage: 'bg-mage-50 text-mage-600 ring-mage-500/10 dark:bg-mage-400/10 dark:text-mage-400 dark:ring-mage-400/20',
  monk: 'bg-monk-50 text-monk-600 ring-monk-500/10 dark:bg-monk-400/10 dark:text-monk-400 dark:ring-monk-400/20',
  paladin:
    'bg-paladin-50 text-paladin-600 ring-paladin-500/10 dark:bg-paladin-400/10 dark:text-paladin-400 dark:ring-paladin-400/20',
  priest:
    'bg-priest-50 text-priest-600 ring-priest-500/10 dark:bg-priest-400/10 dark:text-priest-400 dark:ring-priest-400/20',
  rogue:
    'bg-rogue-50 text-rogue-600 ring-rogue-500/10 dark:bg-rogue-400/10 dark:text-rogue-400 dark:ring-rogue-400/20',
  shaman:
    'bg-shaman-50 text-shaman-600 ring-shaman-500/10 dark:bg-shaman-400/10 dark:text-shaman-400 dark:ring-shaman-400/20',
  warlock:
    'bg-warlock-50 text-warlock-600 ring-warlock-500/10 dark:bg-warlock-400/10 dark:text-warlock-400 dark:ring-warlock-400/20',
  warrior:
    'bg-warrior-50 text-warrior-600 ring-warrior-500/10 dark:bg-warrior-400/10 dark:text-warrior-400 dark:ring-warrior-400/20'
};

const colors = Object.assign(tailwindColors, wowColors);

export default function getTailwindColorClasses(
  color: TailwindColor | WarcraftClass
): string {
  return colors[color] || '';
}
