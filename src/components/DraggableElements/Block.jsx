import { Container } from "@/components/DraggableElements/index";
import { Element, useNode } from "@craftjs/core";
import { v4 as uuidv4 } from "uuid";
const Block = () => {
  const {
    connectors: { connect, drag },
    // Get props from Craft node
    height,
    border,
    borderRadius,
    width,
  } = useNode((node) => ({
    // read here all props properties and can be edit later using setting panel
    height: node.data.props.height,
    border: node.data.props.border,
    width: node.data.props.width || "100%",
    borderRadius: node.data.props.borderRadius,
  }));
  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{
        height,
        border,
        width,
        borderRadius,
      }}
    >
      <Element is={Container} canvas id={uuidv4()}></Element>
    </div>
  );
};

Block.craft = {
  displayName: "Block", // This tells Craft.js it’s a valid component
  props: {
    // Providing defaults props
    height: "100px",
    border: "1px solid black",
    width: "100%",
    borderRadius: "2px",
  },
};

export default Block;
