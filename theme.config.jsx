import Critical from './src/components/Critical';
import Countdown from './src/components/Countdown';
import Role from './src/components/Role';
import Boss from './src/components/Boss';
import Class from './src/components/Class';
import Mythic from './src/components/Mythic';
import Tactic from './src/components/Tactic';
import Tip from './src/components/Tip';
import Image from 'next/image';

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
  docsRepositoryBase: 'https://github.com/gabestah/bbyc-war-room/tree/main',
  logo: (
    <>
      <Image
        src='/assets/images/logo.png'
        alt='BBYC War Room'
        width={54}
        height={54}
      />
      <span className='ml-2 text-2xl font-bold'>BBYC War Room</span>
    </>
  ),
  project: {
    link: 'https://github.com/gabestah/bbyc-war-room'
  },
  useNextSeoProps() {
    return {
      description: 'BBYC strategies for World of Warcraft',
      titleTemplate: '%s – BBYC War Room'
    };
  }
  // ... other theme options
};

export default themeConfig;
