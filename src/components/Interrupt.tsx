import { TailwindColor } from '@/types/tailwind/TailwindColor';
import Badge from '@/components/Badge';
import { Tooltip } from '@mui/joy';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import React from 'react';

export default ({ color = TailwindColor.slate }: { color?: TailwindColor }) => {
  return (
    <Tooltip title='Interruptable mechanic.' placement='top'>
      <Badge
        className={twMerge('inline-block')}
        icons={[
          <Image
            key={'Interrupt'}
            className='mb-1 mr-1 inline-flex !h-4 !w-4'
            alt={'Interrupt'}
            width={24}
            height={24}
            src={`/assets/images/icon-interrupt.png`}
          />
        ]}
        color={color}
        text={'Interrupt'}
      />
    </Tooltip>
  );
};
