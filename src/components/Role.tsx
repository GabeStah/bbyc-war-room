import { TailwindColor } from '@/types/tailwind/TailwindColor';
import Badge from '@/components/Badge';
import React from 'react';
import Image from 'next/image';

export default function Role({
  color,
  role = 'dps',
  text
}: {
  color?: TailwindColor;
  role: 'tank' | 'dps' | 'healer' | 'non-tank';
  text?: string;
}) {
  let iconPath = [`/assets/images/icon-role-${role}.webp`];
  const roleName = role.charAt(0).toUpperCase() + role.slice(1);

  switch (role) {
    case 'non-tank':
      iconPath = [
        `/assets/images/icon-role-dps.webp`,
        `/assets/images/icon-role-healer.webp`
      ];
      break;
  }

  if (!color) {
    switch (role) {
      case 'tank':
        color = TailwindColor.sky;
        break;
      case 'dps':
        color = TailwindColor.rose;
        break;
      case 'healer':
        color = TailwindColor.emerald;
        break;
      case 'non-tank':
        color = TailwindColor.orange;
        break;
    }
  }

  return (
    <Badge
      color={color}
      icons={iconPath.map((icon, index) => (
        <Image
          key={index}
          className='mb-1 mr-1 inline-flex !h-4 !w-4'
          alt={roleName || 'Role'}
          width={24}
          height={24}
          src={icon}
        />
      ))}
      text={text || roleName.toLowerCase()}
    />
  );
}
