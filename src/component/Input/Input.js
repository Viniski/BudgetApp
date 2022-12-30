import { useSelector } from "react-redux";

const Input = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
    return (
        <input
          placeholder={props.placeholder}
          type={props.type}
          value={props?.value}
          onKeyDown={(e) => props?.onKeyDown(e)}
          onChange={(e) => props?.onChange(e.target.value)}
          className={`inputs-section__input ${themeDark && `inputs-section__input--dark`}`}
        />
    );
  };

export default Input;