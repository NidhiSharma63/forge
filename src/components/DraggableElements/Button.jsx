import { useNode } from "@craftjs/core";
const Button = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <button ref={(ref) => connect(drag(ref))}>Button</button>;
};

// ✅ This tells Craft.js it’s a valid component
Button.craft = {
  displayName: "Button",
};

export default Button;
