import { useNode } from "@craftjs/core";

const Container = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div ref={connect} {...props} className="h-full">
      {children}
    </div>
  );
};

Container.craft = {
  displayName: "Container",
  rules: {
    canMoveIn: () => true,
  },
  props: {
    text: "Container",
  },
};

export default Container;
