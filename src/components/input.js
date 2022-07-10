const Input = ({
    id,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    label,
  }) => {
    return (
      <div>
        {label && <div><label htmlFor={id || name}>{label}</label></div>}
        <input
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default Input;
  