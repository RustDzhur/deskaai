import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '../twable-classnames';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';
import {TbLoader} from 'react-icons/tb';
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        secondaryOutline: `bg-brand-4 border-brand-6 text-brand-11 hover:bg-brand-5 focus:ring-2 focus:ring-brand-7 focus:outline-none focus:bg-brand-6 disabled:hover:bg-brand-4 inline-flex items-center border justify-center select-none disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer`,
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        xs: 'h-8 px-2 rounded-md',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        iconXs: 'h-8 w-8 p-2 rounded-md',
        iconSm: 'h-9 w-9 p-2 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, loading, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button';

    const button = (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    );
    if (props['aria-label']) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>{button}</TooltipTrigger>
            <TooltipContent>{props['aria-label']}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    if (loading) {
      props.children = (
        <>
          <TbLoader className="animate-spin" />
        </>
      );
      return (
        <Comp
          className={cn(buttonVariants({variant, size, className}))}
          ref={ref}
          {...props}
        />
      );
    }
    return button;
  }
);
Button.displayName = 'Button';

export {Button, buttonVariants};
