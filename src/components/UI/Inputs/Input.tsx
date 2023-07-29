import { ComponentProps } from 'react';
import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  placeholder?: string;
  type: string;
  max?: number | string;
  onChange: (value: string) => void;
  value?: string | string[];
  variant?: string;
} & ComponentProps<'input'>;

export const Input = ({ type, variant = 'section', ...props }: Props) => {
  const isDarkTheme = useTheme();

  return (
    <input
      {...props}
      className={clsx(`inputs-${variant}__input`, isDarkTheme && `inputs-${variant}__input--dark`)}
      max={props?.max}
      placeholder={props?.placeholder}
      type={type}
      value={props?.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};
