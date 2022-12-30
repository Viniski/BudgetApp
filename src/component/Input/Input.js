const Input = (props) => {
    return (
        <input
          placeholder={props.placeholder}
          type={props.type}
          value={props?.value}
          onKeyDown={(e) => props?.onKeyDown(e)}
          onChange={(e) => props?.onChange(e.target.value)}
          className="inputs-section__input inputs-section__input--dark"
        />
    );
  };

export default Input;