import { TailwindColor } from '@/types/tailwind/TailwindColor';
import { Error } from '@mui/icons-material';
import Badge from '@/components/Badge';
import { Tooltip } from '@mui/joy';

export default ({ color = TailwindColor.red }: { color?: TailwindColor }) => {
  return (
    <Tooltip title='This is a critical mechanic.' placement='top'>
      <Badge
        icons={[<Error key={0} className='mb-1 mr-1 inline-flex h-4 w-4' />]}
        color={color}
        text={'Critical'}
      />
    </Tooltip>
  );
};
