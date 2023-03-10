import { useSelector } from "react-redux";

export const Input = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : "";

  return (
    <input
      placeholder={props?.placeholder}
      type={props.type}
      value={props?.value}
      max={props?.max}
      onChange={(e) => props.onChange(e.target.value)}
      className={`inputs-${props.className}__input ${
        themeDark && `inputs-${props.className}__input--dark`
      }`}
    />
  );
};

Input.defaultProps = {
  className: "section",
};
