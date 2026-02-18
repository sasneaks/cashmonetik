'use client';

import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center gap-2 font-display font-semibold whitespace-nowrap relative transition-all duration-300 ease-out-custom group',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:bg-primary-hover hover:shadow-[0_4px_20px_rgba(59,130,246,0.25),0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
        outline:
          'bg-transparent text-text border border-border backdrop-blur-sm hover:border-border-hover hover:bg-bg-card hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
        glow: 'bg-primary text-white animate-btn-glow-pulse hover:animate-none hover:bg-primary-hover hover:shadow-[0_4px_20px_rgba(59,130,246,0.25),0_8px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
      },
      size: {
        sm: 'text-[13px] px-4 py-2 rounded-sm',
        default: 'text-sm px-6 py-3 rounded-md',
        lg: 'text-[15px] px-8 py-4 rounded-md',
        xl: 'text-base px-10 py-5 rounded-md',
      },
      fullWidth: {
        true: 'w-full justify-center',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  href,
  children,
  variant,
  size,
  fullWidth,
  className,
  arrow,
  external,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {arrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out-custom group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
