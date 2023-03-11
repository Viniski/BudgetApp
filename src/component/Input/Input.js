import { useSelector } from "react-redux";

export const Input = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme === "dark";

  return (
    <input
      placeholder={props?.placeholder}
      type={props.type}
      value={props?.value}
      max={props?.max}
      onChange={(e) => props.onChange(e.target.value)}
      className={`inputs-${props.className}__input ${
        isDarkTheme && `inputs-${props.className}__input--dark`
      }`}
    />
  );
};

Input.defaultProps = {
  className: "section",
};
