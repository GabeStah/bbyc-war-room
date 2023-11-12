import { TailwindColor } from '@/types/tailwind/TailwindColor';
import Badge from '@/components/Badge';
import { Tooltip } from '@mui/joy';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import React from 'react';

export default ({ color = TailwindColor.slate }: { color?: TailwindColor }) => {
  return (
    <Tooltip title='Dispelable mechanic.' placement='top'>
      <Badge
        className={twMerge('inline-block')}
        icons={[
          <Image
            key={'Dispel'}
            className='mb-1 mr-1 inline-flex !h-4 !w-4'
            alt={'Dispel'}
            width={24}
            height={24}
            src={`/assets/images/icon-dispel.png`}
          />
        ]}
        color={color}
        text={'Dispel'}
      />
    </Tooltip>
  );
};
