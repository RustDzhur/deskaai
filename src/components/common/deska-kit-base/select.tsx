'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import {Check, ChevronDown} from 'lucide-react';

import {cn} from '../twable-classnames';
import Loading from '../base/loading';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      `flex h-10 w-full items-center justify-between 
      rounded-md border border-input bg-transparent 
      px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none 
      focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
      className
    )}
    {...props}
  >
    <div className="truncate flex flex-row gap-2">{children}</div>
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({className, children, position = 'popper', ...props}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80',
        position === 'popper' && 'translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({className, ...props}, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({className, children, ...props}, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({className, ...props}, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

{
  /* <Select>
<SelectTrigger
  value={assigneeId ? String(assigneeId) : undefined}
  className="w-[180px] h-8"
>
  <SelectValue placeholder="No assignee" />
</SelectTrigger>

<SelectContent>
  <SelectGroup>
    <SelectItem value={UNASSIGNED}>No assignee</SelectItem>
    {users.map((user: User) => {
      const value = String(user.id);

      return (
        <SelectItem key={value} value={value}>
          {user.full_name || user.email}
        </SelectItem>
      );
    })}
  </SelectGroup>
</SelectContent>
</Select> */
}

// id="icon_variant"
// style={{ width: 280 }}
// className="w-80"
// value={iconVariant}
// onChange={this.handleChangeIconVariant}
// options={['outlined', 'filled'].map((variant) => {
//   return { value: variant, label: capitalize(variant) };
// })}

const SimpleSelect = ({
  className,
  value,
  onChange,
  options,
  placeholder,
  onBlur,
  loading,
}: {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  options: {value: string; label: string}[];
  placeholder: string;
  onBlur?: () => void;
  loading?: boolean;
}) => {
  // find value in options
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        className={cn('w-[180px] h-8', className)}
        onBlur={onBlur}
        disabled={loading}
      >
        {loading ? <Loading /> : null}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {options.map((option) => {
            return (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SimpleSelect,
};
