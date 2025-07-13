const Input = ({ name, value, onChange }) => {
  return (
    <div className="flex gap-1 text-sm">
      <label for={name}>{name.toUpperCase()} </label>:{" "}
      <input
        type={"number"}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-12 rounded-sm text-center text-sm no-spinner bg-slate-50"
      />
    </div>
  );
};

export default Input;
