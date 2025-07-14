import { BlockContainer } from "@/components/DraggableElements/index";
import { Element } from "@craftjs/core";
import { v4 as uuidv4 } from "uuid";

// it will render container
const Block = () => {
  return <Element is={BlockContainer} canvas id={uuidv4()}></Element>;
};

Block.craft = {
  displayName: "Block",
  props: {
    height: "100px",
    width: "100%",
    border: "1px solid black",
    borderRadius: "2px",
    marginTop: "20px",
    marginBottom: "0px",
    marginLeft: "0px",
    marginRight: "0px",
  },
};

export default Block;

