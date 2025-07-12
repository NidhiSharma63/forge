import { useNode } from "@craftjs/core";
const Text = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <p ref={(ref) => connect(drag(ref))} contenteditable="true">
      Text
    </p>
  );
};

export default Text;
