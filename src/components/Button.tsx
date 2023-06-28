import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  className,
  href,
  target,
  onClick,
  type = 'button',
}: ButtonProps) {
  const commonClasses = clsx(
    'inline-block rounded-lg bg-secondarylight dark:bg-secondary px-4 py-2 text-white transition-colors duration-300 dark:text-night hover:dark:border-jetdark hover:border-grayishblue hover:text-secondarylight hover:dark:text-secondary hover:dark:bg-black hover:bg-white hover:border border-secondarylight dark:border-secondary',
    className
  );

  if (href) {
    return (
      <Link href={href} target={target} className={commonClasses}>
        {children}
      </Link>
    );
  } else {
    return (
      <button type={type} onClick={onClick} className={commonClasses}>
        {children}
      </button>
    );
  }
}
