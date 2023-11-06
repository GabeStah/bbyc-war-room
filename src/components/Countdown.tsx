import { TailwindColor } from '@/types/tailwind/TailwindColor';
import { Alarm } from '@mui/icons-material';
import Badge from '@/components/Badge';
import { Tooltip } from '@mui/joy';

export default ({
  color = TailwindColor.yellow
}: {
  color?: TailwindColor;
}) => {
  return (
    <Tooltip title='Add this to your boss mods countdown.' placement='top'>
      <Badge
        icons={[<Alarm key={0} className='mb-1 mr-1 inline-flex !h-4 !w-4' />]}
        color={color}
        text={'Countdown'}
      />
    </Tooltip>
  );
};
