const Input = (props) => {
    return (
        <input
          placeholder={props.placeholder}
          type={props.type}
          value={props?.value}
          onKeyDown={(e) => props?.onKeyDown(e)}
          onChange={(e) => props?.onChange(e.target.value)}
          className="input"
        />
    );
  };

export default Input;