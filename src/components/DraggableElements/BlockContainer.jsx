import BlockSetting from "@/components/StyleSettings/BlockSetting";
import { useNode } from "@craftjs/core";
import { v4 as uuidv4 } from "uuid";

const BlockContainer = ({
  children,
  marginTop,
  minHeight,
  width,
  border,
  ...props
}) => {
  const {
    connectors: { connect },
  } = useNode();
  console.log(marginTop, "marginTOp");

  return (
    <div
      ref={connect}
      {...props}
      style={{
        minHeight,
        width,
        border,
        marginTop,
      }}
      className=""
    >
      <Element is={<div></div>} canvas id={uuidv4()}>
        {children}
      </Element>
      ;
    </div>
  );
};

BlockContainer.craft = {
  displayName: "BlockContainer",
  rules: {
    canMoveIn: () => true,
  },
  props: {
    // text: "",
    minHeight: "100px",
    width: "100%",
    border: "2px solid black",
  },
  related: {
    settings: BlockSetting,
  },
};

export default BlockContainer;
