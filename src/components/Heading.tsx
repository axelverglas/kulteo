import React, { ReactNode } from 'react';
import clsx from 'clsx';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  level: HeadingLevel;
  children: ReactNode;
  title?: string;
  className?: string;
}

const styleConfig: Record<HeadingLevel, string> = {
  h1: 'text-3xl md:text-5xl font-roc',
  h2: 'text-2xl md:text-4xl font-roc font-medium',
  h3: 'text-xl md:text-3xl font-roc',
  h4: 'text-lg md:text-2xl font-roc',
};

export default function Heading({
  level,
  children,
  className,
  title,
}: HeadingProps) {
  const HeadingTag = level;

  return (
    <HeadingTag title={title} className={clsx(styleConfig[level], className)}>
      {children}
    </HeadingTag>
  );
}
