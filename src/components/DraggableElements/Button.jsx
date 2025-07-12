import { useNode } from "@craftjs/core";
const Button = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button ref={(ref) => connect(drag(ref))} contenteditable="true">
      Button
    </button>
  );
};

export default Button;
