import Input from "@/common/NumberInput";

const SpacingControl = ({ value, onChange, heading }) => {
  console.log(value, "value");
  return (
    <div className="mt-4">
      <p className="px-4 text-sm mb-2 bg-slate-50">{heading}</p>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 justify-center align-middle">
          <Input name="Top" value={value.Top} onChange={onChange} />
          <Input name="Bottom" value={value.Bottom} onChange={onChange} />
        </div>
        <div className="flex gap-4 justify-center align-middle">
          <Input name="Left" value={value.Left} onChange={onChange} />
          <Input name="Right" value={value.Right} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};
export default SpacingControl;
