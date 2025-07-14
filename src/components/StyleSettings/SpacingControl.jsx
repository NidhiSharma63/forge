import Input from "@/common/NumberInput";

const SpacingControl = ({ value, onChange, heading }) => {
  // console.log(value, "value");
  return (
    <div className="mt-4">
      <p className="px-4 text-sm mb-2 bg-slate-50">{heading}</p>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 justify-center align-middle">
          <Input name="top" value={value.top} onChange={onChange} />
          <Input name="bottom" value={value.bottom} onChange={onChange} />
        </div>
        <div className="flex gap-4 justify-center align-middle">
          <Input name="left" value={value.left} onChange={onChange} />
          <Input name="right" value={value.right} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};
export default SpacingControl;
