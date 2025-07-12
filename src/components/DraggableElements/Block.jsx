import { useNode } from "@craftjs/core";
const Block = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(ref) => connect(drag(ref))}>Block</div>;
};

export default Block;
