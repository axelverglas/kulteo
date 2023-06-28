import React, { ReactNode } from 'react';
import clsx from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  level: HeadingLevel;
  size?: HeadingLevel;
  children: ReactNode;
  title?: string;
  className?: string;
}

const styleConfig: Record<HeadingLevel, string> = {
  h1: 'text-3xl md:text-4xl font-roc font-bold',
  h2: 'text-2xl md:text-[2rem] font-roc font-bold',
  h3: 'text-xl md:text-2xl font-roc font-bold',
  h4: 'text-lg md:text-xl font-roc font-bold',
};

export default function Heading({
  level,
  size = level,
  children,
  className,
  title,
}: HeadingProps) {
  const HeadingTag = level;

  return (
    <HeadingTag title={title} className={clsx(styleConfig[size], className)}>
      {children}
    </HeadingTag>
  );
}
