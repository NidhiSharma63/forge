import { useNode } from "@craftjs/core";
const Image = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(ref) => connect(drag(ref))}>Image</div>;
};

export default Image;
