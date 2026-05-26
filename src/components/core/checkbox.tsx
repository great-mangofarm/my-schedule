import { cn } from '@/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { useId, type ComponentProps, type SVGProps } from 'react';

const checkboxStyles = cva(
  'bg-checkbox-background peer-focus:border-primary-300 group-hover:border-checkbox-checked-border peer-checked:bg-checkbox-checked-background peer-checked:border-checkbox-checked-border! peer-focus:ring-checkbox-checked-border/20 border-base-200 peer-disabled:border-base-50 [&>svg]:text-checkbox-checked-icon-color grid place-items-center border transition peer-focus:ring-4 [&>svg]:hidden peer-checked:[&>svg]:block peer-disabled:[&>svg]:text-(--border-color-base-50)',
  {
    variants: {
      size: {
        sm: 'size-4 rounded [&>svg]:size-3',
        md: 'size-5 rounded-md [&>svg]:size-3.5',
      },
    },
    defaultVariants: {
      size: 'sm',
    },
  },
);

type PropsType = Omit<ComponentProps<'input'>, 'size'> &
  VariantProps<typeof checkboxStyles> & {
    label?: string;
  };

export function Checkbox({
  label,
  id: inputId,
  size,
  disabled,
  className,
  ...inputProps
}: PropsType) {
  const generatedId = useId();
  const id = inputId || generatedId;

  return (
    <label
      htmlFor={id}
      className={cn(
        'group flex w-full max-w-fit cursor-pointer items-center gap-3 select-none aria-disabled:cursor-not-allowed',
        className,
      )}
      aria-disabled={disabled}
    >
      <div>
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          disabled={disabled}
          {...inputProps}
        />

        <div className={checkboxStyles({ size })}>
          <CheckIcon />
        </div>
      </div>

      {label && (
        <span
          className={cn('text-text-50 text-sm', disabled && 'text-text-200')}
        >
          {label}
        </span>
      )}
    </label>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      className="stroke-checkbox-checked-icon-color"
      {...props}
    >
      <path
        d="M11.667 3.5L5.25 9.917 2.333 7"
        stroke="currentColor"
        strokeWidth={1.94437}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
