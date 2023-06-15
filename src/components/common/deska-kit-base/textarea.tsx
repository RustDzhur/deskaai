import * as React from 'react';

import {cn} from '../twable-classnames';
import {Label} from './label';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

const TextareaWithLabel = React.forwardRef<
  HTMLTextAreaElement,
  {
    label?: string;
    wrapperClassName?: string;
    htmlFor?: string;
    footer?: string;
  } & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({className, wrapperClassName, htmlFor, label, footer, ...props}, ref) => {
  return (
    <div className={cn('grid w-full gap-1.5', wrapperClassName)}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {footer && <p className="text-sm text-muted-foreground">{footer}</p>}
    </div>
  );
});
TextareaWithLabel.displayName = 'TextareaWithLabel';

export {Textarea, TextareaWithLabel};
