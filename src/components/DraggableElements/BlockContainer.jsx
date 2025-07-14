import BlockSetting from "@/components/StyleSettings/BlockSetting";
import { useNode } from "@craftjs/core";

const BlockContainer = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div ref={connect} {...props} className="h-full">
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
  },
  related: {
    settings: BlockSetting,
  },
};

export default BlockContainer;
