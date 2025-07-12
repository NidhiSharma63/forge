import { useNode } from "@craftjs/core";
const Button = () => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(ref) => connect(drag(ref))}>Button</div>;
};

export default Button;
