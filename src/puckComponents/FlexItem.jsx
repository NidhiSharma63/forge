const FlexItem = ({
  grow,
  shrink,
  basis,
  order,
  alignSelf,
  padding,
  background,
  radius,
  border,
  width,
  height,
  puck,
  content: Content,
}) => {
  return (
    <div
      ref={puck?.dragRef}
      style={{
        flexGrow: grow ?? 0,
        flexShrink: shrink ?? 1,
        flexBasis: basis || "auto",
        order: order ?? 0,
        alignSelf: alignSelf || "auto",
        padding: padding ? `${padding}px` : undefined,
        background,
        borderRadius: radius ? `${radius}px` : undefined,
        border: border || "1px solid #e5e7eb",
        boxSizing: "border-box",
        minWidth: 0,
        width: width
          ? typeof width === "number"
            ? `${width}px`
            : width
          : undefined,
        height: height
          ? typeof height === "number"
            ? `${height}px`
            : height
          : undefined,
      }}
    >
      <Content />
    </div>
  );
};

const FlexItemConfig = {
  inline: true, // so the wrapper is the actual styled node
  fields: {
    // Flex behavior
    grow: { type: "number", label: "Flex Grow", defaultValue: 0 },
    shrink: { type: "number", label: "Flex Shrink", defaultValue: 1 },
    basis: {
      type: "text",
      label: "Flex Basis (px, %, auto)",
      defaultValue: "auto",
    },
    order: { type: "number", label: "Order", defaultValue: 0 },
    alignSelf: {
      type: "select",
      label: "Align Self",
      options: [
        { label: "auto", value: "auto" },
        { label: "flex-start", value: "flex-start" },
        { label: "center", value: "center" },
        { label: "flex-end", value: "flex-end" },
        { label: "stretch", value: "stretch" },
        { label: "baseline", value: "baseline" },
      ],
      defaultValue: "auto",
    },

    // Appearance
    padding: { type: "number", label: "Padding", defaultValue: 12 },
    background: { type: "text", label: "Background", defaultValue: "#ffffff" },
    radius: { type: "number", label: "Border Radius", defaultValue: 8 },
    border: {
      type: "text",
      label: "Border CSS",
      defaultValue: "1px solid #e5e7eb",
    },
    width: { type: "text", label: "Width (px, %, auto)", defaultValue: "" },
    height: { type: "text", label: "Height (px, %, auto)", defaultValue: "" },

    // Slot: put any component inside this item
    content: { type: "slot" },
  },

  defaultProps: {
    grow: 0,
    shrink: 1,
    basis: "auto",
    order: 0,
    alignSelf: "auto",
    padding: 12,
    background: "#ffffff",
    radius: 8,
    border: "1px solid #e5e7eb",
    width: 200,
    height: 200,
  },

  render: ({ puck, content, ...props }) => (
    <FlexItem puck={puck} content={content} {...props} />
  ),
};

export { FlexItem, FlexItemConfig };
