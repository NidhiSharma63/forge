import { useNode } from "@craftjs/core";

const Container = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div
      ref={connect}
      {...props}
      className="p-2 border border-dashed border-gray-400 h-full"
    >
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
