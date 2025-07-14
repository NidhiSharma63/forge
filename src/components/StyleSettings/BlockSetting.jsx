import Input from "@/common/NumberInput";
import DisplayIcon from "@/components/StyleSettings/DisplayIcon";
import SpacingControl from "@/components/StyleSettings/SpacingControl";
import useBlockSetting from "@/hooks/useBlockSetting";
import {
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignVerticalJustifyStart,
} from "lucide-react";

const BlockSetting = () => {
  const {
    marginValue,
    paddingValue,
    handleChangeValueForPadding,
    handleChangeValueForMargin,
  } = useBlockSetting();
  console.log(marginValue, "margin");
  return (
    <div className="mt-4">
      {/* maring */}
      <SpacingControl
        heading={"Margin"}
        onChange={handleChangeValueForMargin}
        value={marginValue}
      />
      {/* padding */}
      <SpacingControl
        heading={"Padding"}
        onChange={handleChangeValueForPadding}
        value={paddingValue}
      />
      {/* disply */}
      <div>
        <div className="mt-4">
          <p className="px-4 text-sm mb-2 bg-slate-50">Display</p>
          <div className="px-4 flex gap-4 text-sm ">
            <label for="display">Display</label>

            <select id="display" className="flex-1 bg-white">
              <option value="volvo">Flex</option>
              <option value="saab">Grid</option>
              <option value="opel">Block</option>
            </select>
          </div>
        </div>
      </div>
      {/*  */}
      {/* flex direction */}
      <div className="mt-4">
        <p className="px-4 text-sm mb-2 bg-slate-50">Flex Direction</p>
        <div className="flex align-middle px-4 gap-4">
          <DisplayIcon Icon={AlignHorizontalJustifyStart} title={"Column"} />
          <DisplayIcon Icon={AlignVerticalJustifyStart} title={"Row"} />
        </div>
      </div>
      {/*  */}
      {/* justify content */}
      <div className="mt-4">
        <p className="px-4 text-sm mb-2 bg-slate-50">Justify Content</p>
        <div className="flex align-middle px-4 gap-2">
          <DisplayIcon
            Icon={AlignHorizontalJustifyStart}
            title={"Justify Start"}
          />
          <DisplayIcon
            Icon={AlignHorizontalJustifyCenter}
            title={"Justify Center"}
          />
          <DisplayIcon Icon={AlignHorizontalJustifyEnd} title={"Justify End"} />
          <DisplayIcon
            Icon={AlignHorizontalSpaceBetween}
            title={"Space Between"}
          />

          <DisplayIcon
            Icon={AlignHorizontalSpaceAround}
            title={"Space Around"}
          />
          <DisplayIcon Icon={AlignJustify} title={"space-evenly"} />
        </div>
      </div>
      <div className="mt-4">
        <p className="px-4 text-sm mb-2 bg-slate-50">Properties</p>

        {/* heigh and width */}
        <div className="flex gap-4 justify-start px-4">
          <Input name="Gap" value="240" />
        </div>
        {/* heigh and width */}
        <div className="flex gap-4 justify-center align-middle mt-4 ">
          <Input name="width" value="240" />
          <Input name="height" value="240" />
        </div>
      </div>
    </div>
  );
};

export default BlockSetting;




  // const {
  //   selectedNodeId,
  //   actions: { setProp },
  //   query,
  // } = useEditor((state) => ({
  //   selectedNodeId: state.events.selected,
  // }));

  // if (selectedNodeId.size === 0) {
  //   return <p>Nothing is selected</p>;
  // } else {
  //   const selectedId = Array.from(selectedNodeId)[0];
  //   const nodeProps = query.node(selectedId).get().data;
  //   console.log(nodeProps);
  // }

  // const { query, actions } = useEditor(); // outside selector

  // const { selected } = useEditor((state) => ({
  //   selected: state.events.selected,
  // }));

  // const selectedNodeId = selected && Array.from(selected)[0];

  // if (!selectedNodeId) {
  //   return <p>Nothing selected</p>;
  // }

  // const nodeProps = query.node(selectedNodeId).get().data.props;
  // console.log("Selected node props:", nodeProps);