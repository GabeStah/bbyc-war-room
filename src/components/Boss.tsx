import Image from 'next/image';
import clsx from 'clsx';
import getTailwindColorClasses from '@/utils/getTailwindColorClasses';
import { TailwindColor } from '@/types/tailwind/TailwindColor';
import { Alarm, Error, SvgIconComponent } from '@mui/icons-material';
import { forwardRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Icon = string | ReactNode | JSX.Element;

type Props = {
  className?: string;
  color?: TailwindColor;
  icons?: Icon[];
  text: string;
};

/**
 * A badge is a small status descriptor for UI elements.
 *
 * @note Must forward refs and spread props to the underlying element for Material UI Tooltip to work.
 */
export default forwardRef<HTMLSpanElement, Props>(
  ({ className, color = TailwindColor.yellow, icons, text, ...rest }, ref) => {
    return (
      <span>
        <span
          className={twMerge(
            'inline-block break-words rounded-l-md px-1 ring-1 ring-inset',
            getTailwindColorClasses(color),
            className
          )}
          {...rest}
          ref={ref}
        >
          Boss
        </span>
        <span
          className={twMerge(
            'inline-block break-words rounded-r-md px-1 ring-1 ring-inset',
            getTailwindColorClasses(color),
            className
          )}
          {...rest}
          ref={ref}
        >
          {text}
        </span>
      </span>
    );
  }
);
