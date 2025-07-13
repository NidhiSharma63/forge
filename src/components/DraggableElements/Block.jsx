import { useNode } from "@craftjs/core";
const Block = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(ref) => connect(drag(ref))}>Block</div>;
};

// ✅ This tells Craft.js it’s a valid component
Block.craft = {
  displayName: "Block",
};

export default Block;
