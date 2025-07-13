const Input = ({ name, value, onChange }) => {
  return (
    <div>
      <label for={name}>{name}</label>
      <input
        type={"number"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
