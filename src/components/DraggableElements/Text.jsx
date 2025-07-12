import { useNode } from "@craftjs/core";
const Text = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(ref) => connect(drag(ref))}>Text</div>;
};

export default Text;
