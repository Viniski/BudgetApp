import { useTheme } from "../../hooks/useTheme";

type Props = {
  placeholder?: string;
  type: string;
  max?: number | string;
  onChange: (value: string) => void;
  value?: string[];
  variant: string;
};

export const Input = (props: Props) => {
  const isDarkTheme = useTheme();
  return (
    <input
      placeholder={props?.placeholder}
      type={props.type}
      value={props?.value}
      max={props?.max}
      onChange={(e) => props.onChange(e.target.value)}
      className={`inputs-${props.variant}__input ${
        isDarkTheme && `inputs-${props.variant}__input--dark`
      }`}
    />
  );
};

Input.defaultProps = {
  variant: "section",
};
