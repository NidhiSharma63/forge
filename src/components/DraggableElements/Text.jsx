import { useNode } from "@craftjs/core";
const Text = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <p ref={(ref) => connect(drag(ref))} contentEditable={true}>
      Text
    </p>
  );
};

Text.craft = { displayName: "Text" };
export default Text;
