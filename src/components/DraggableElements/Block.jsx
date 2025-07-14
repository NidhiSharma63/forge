import { BlockContainer } from "@/components/DraggableElements/index";
import { Element, useNode } from "@craftjs/core";
import { v4 as uuidv4 } from "uuid";
const Block = ({ height, width, border, borderRadius, ...props }) => {
  const {
    connectors: { connect, drag },
    id,
    actions,
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      onClick={(e) => {
        e.stopPropagation(); // prevent event bubbling
        actions.selectNode(id);
      }}
      style={{
        height,
        width,
        border,
        borderRadius,
      }}
    >
      <Element is={BlockContainer} canvas id={uuidv4()}></Element>
    </div>
  );
};

Block.craft = {
  displayName: "Block",
  props: {
    height: "100px",
    width: "100%",
    border: "1px solid black",
    borderRadius: "2px",
  },
};

export default Block;
