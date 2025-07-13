import { useNode } from "@craftjs/core";
const Button = () => {
  const {
    connectors: { connect, drag },
    padding,
    border,
    borderRadius,
  } = useNode((node) => ({
    // read here all props properties and can be edit later using setting panel
    padding: node.data.props.padding,
    border: node.data.props.border,
    borderRadius: node.data.props.borderRadius,
  }));
  return (
    <button
      style={{
        padding,
        border,
        borderRadius,
      }}
      ref={(ref) => connect(drag(ref))}
    >
      Button
    </button>
  );
};

// ✅ This tells Craft.js it’s a valid component
Button.craft = {
  displayName: "Button",
  props: {
    padding: "5px 30px",
    border: "1px solid black",
    borderRadius: "2px",
  },
};

export default Button;
