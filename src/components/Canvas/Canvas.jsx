import { Container } from "@/components/DraggableElements/index";
import { Element, Frame } from "@craftjs/core";

const Canvas = () => {
  return (
    <div className="col-span-4 border-2 border-amber-400">
      <Frame>
        <Element is={Container} canvas />
      </Frame>
    </div>
  );
};

export default Canvas;
