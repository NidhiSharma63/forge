import Input from "@/common/NumberInput";

const SpacingControl = ({ name, onChange, heading }) => {
  return (
    <div className="mt-4">
      <p className="px-4 text-sm mb-1 bg-slate-50">{heading}</p>
      <div className="flex gap-4 flex-col">
        <div className="flex gap-4 justify-center align-middle">
          <Input name="Top" value="240" />
          <Input name="bottom" value="240" />
        </div>
        <div className="flex gap-4 justify-center align-middle">
          <Input name="left" value="240" />
          <Input name="height" value="240" />
        </div>
      </div>
    </div>
  );
};

const BlockSetting = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-4 justify-center align-middle">
        <Input name="width" value="240" />
        <Input name="height" value="240" />
      </div>
      <SpacingControl heading={"Margin"} />
      <SpacingControl heading={"Padding"} />
    </div>
  );
};

export default BlockSetting;
