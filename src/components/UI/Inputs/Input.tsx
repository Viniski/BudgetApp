import { clsx } from "clsx";
import { useTheme } from "../../../hooks/useTheme";

type Props = {
  placeholder?: string;
  type: string;
  max?: number | string;
  onChange: (value: string) => void;
  value?: string | string[];
  variant?: string;
};

export const Input = ({ type, variant = "section", ...props }: Props) => {
  const isDarkTheme = useTheme();
  return (
    <input
      placeholder={props?.placeholder}
      type={type}
      value={props?.value}
      max={props?.max}
      onChange={(e) => props.onChange(e.target.value)}
      className={clsx(
        `inputs-${variant}__input`,
        isDarkTheme && `inputs-${variant}__input--dark`
      )}
    />
  );
};
