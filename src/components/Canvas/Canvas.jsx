import { Element, Frame } from "@craftjs/core";
const Canvas = () => {
  return (
    <div className="col-span-4 border-2 border-amber-400">
      <Frame>
        <Element
          is="div"
          canvas
          style={{
            height: "100%",
            padding: 10,
            border: "1px dashed gray",
          }}
        ></Element>
      </Frame>
    </div>
  );
};

export default Canvas;
