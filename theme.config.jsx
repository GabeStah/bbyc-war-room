import Critical from './src/components/Critical';
import Countdown from './src/components/Countdown';
import Role from './src/components/Role';
import Boss from './src/components/Boss';
import Class from './src/components/Class';
import Mythic from './src/components/Mythic';
import Tactic from './src/components/Tactic';
import Tip from './src/components/Tip';

/** @type {import('nextra').ThemeConfig} */
const themeConfig = {
  components: {
    Boss,
    Class,
    Countdown,
    Critical,
    Mythic,
    Role,
    Tactic,
    Tip
  },
  chat: {
    link: 'https://discord.gg/7vnEG7anv'
  },
  docsRepositoryBase: 'https://github.com/gabestah/bbyc-war-room',
  logo: <span>BBYC War Room</span>,
  project: {
    link: 'https://war-room.bbyc.dev'
  }
  // ... other theme options
};

export default themeConfig;
