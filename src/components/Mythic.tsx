import { TailwindColor } from '@/types/tailwind/TailwindColor';
import { Camera } from '@mui/icons-material';
import Badge from '@/components/Badge';
import { Tooltip } from '@mui/joy';
import { twMerge } from 'tailwind-merge';

export default ({
  color = TailwindColor.pink,
  full = false
}: {
  color?: TailwindColor;
  full?: boolean;
}) => {
  return (
    <Badge
      className={twMerge(full ? 'my-4 block text-xl' : 'inline-block pr-2')}
      icons={[
        <Camera
          key='camera'
          className={twMerge(
            'mb-1 mr-1 inline-flex',
            full ? 'h-6 w-6' : 'h-4 w-4'
          )}
        />
      ]}
      color={color}
      text={'Mythic'}
    />
  );
};
