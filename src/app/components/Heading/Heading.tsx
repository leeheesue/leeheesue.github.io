import React, { ReactNode } from 'react';

import { pixelToRem } from '@/shared/utils';

type HeadingProps = React.ComponentPropsWithoutRef<'h1'> & {
  level: 1 | 2 | 3 | 4 | 5;
  children: ReactNode;
  align?: 'center' | 'left' | 'right';
  fontSize?: number;
};

const Heading = ({ level, children, align, fontSize, className }: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const safeFontSize = fontSize ? { fontSize: pixelToRem(fontSize) } : {};
  const safeAlign = align ? { textAlign: align } : {};

  return (
    <HeadingTag style={{ ...safeAlign, ...safeFontSize }} className={className || ''}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
