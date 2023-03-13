import { useSelector } from "react-redux";

export const Input = (props) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

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
