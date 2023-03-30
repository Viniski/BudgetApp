import { useTheme } from "../../hooks/useTheme";

export const Input = (props) => {
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
