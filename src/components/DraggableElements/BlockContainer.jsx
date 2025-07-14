import BlockSetting from "@/components/StyleSettings/BlockSetting";
import { useNode } from "@craftjs/core";

const BlockContainer = ({
  children,
  marginTop,
  height,
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
        height,
        width,
        border,
        marginTop: marginTop,
      }}
      className=""
    >
      {children}
    </div>
  );
};

BlockContainer.craft = {
  displayName: "Container",
  rules: {
    canMoveIn: () => true,
  },
  props: {
    text: "Container",
    height: "100px",
    width: "100%",
    border: "2px solid black",
  },
  related: {
    settings: BlockSetting,
  },
};

export default BlockContainer;
