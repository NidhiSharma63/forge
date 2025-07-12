import { useNode } from "@craftjs/core";
const Block = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref))}>
      {" "}
      <Element is="div" canvas style={{ padding: 10 }}>
        Drop here in Block
      </Element>
    </div>
  );
};

export default Block;
