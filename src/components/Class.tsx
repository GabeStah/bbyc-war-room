import Image from 'next/image';
import clsx from 'clsx';
import getTailwindColorClasses from '@/utils/getTailwindColorClasses';
import { TailwindColor } from '@/types/tailwind/TailwindColor';
import { Alarm, Error, SvgIconComponent } from '@mui/icons-material';
import { forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { WarcraftClass } from '@/types/tailwind/WarcraftClass';

type Icon = string | ReactNode | JSX.Element;

type Props = {
  className?: string;
  color?: TailwindColor;
  name: WarcraftClass;
  icons?: Icon[];
  text: string;
};

/**
 * A badge is a small status descriptor for UI elements.
 *
 * @note Must forward refs and spread props to the underlying element for Material UI Tooltip to work.
 */
export default forwardRef<HTMLSpanElement, Props>(
  ({ className, color, icons, name, text, ...rest }, ref) => {
    // Ensure that the class name is lowercase, kebab-cased.
    name = name?.toLowerCase() as WarcraftClass;
    name = name?.replace(' ', '-') as WarcraftClass;

    return (
      <span
        className={twMerge(
          'inline-block break-words rounded-md px-1 ring-1 ring-inset',
          getTailwindColorClasses(name),
          className
        )}
        {...rest}
        ref={ref}
      >
        {text}
      </span>
    );
  }
);
