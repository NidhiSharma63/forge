// FlexItem.jsx
const FlexItem = ({
  grow,
  shrink,
  basis,
  order,
  alignSelf,
  direction,
  justifyContent,
  alignItems,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  background,
  radius,
  borderWidth,
  borderColor,
  width,
  height,
  puck,
  content: Content,
}) => {
  return (
    <div
      ref={puck?.dragRef}
      style={{
        display: "flex", // ✅ Flex container
        flexDirection: direction || "row", // default row
        justifyContent: justifyContent || "flex-start",
        alignItems: alignItems || "stretch",

        flexGrow: grow ?? 0,
        flexShrink: shrink ?? 1,
        flexBasis: basis || "auto",
        order: order ?? 0,
        alignSelf: alignSelf || "auto",

        // ✅ Individual padding
        paddingTop: paddingTop ? `${paddingTop}px` : undefined,
        paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
        paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
        paddingRight: paddingRight ? `${paddingRight}px` : undefined,

        // ✅ Individual margin
        marginTop: marginTop ? `${marginTop}px` : undefined,
        marginBottom: marginBottom ? `${marginBottom}px` : undefined,
        marginLeft: marginLeft ? `${marginLeft}px` : undefined,
        marginRight: marginRight ? `${marginRight}px` : undefined,

        background: background || "transparent",
        borderRadius: radius ? `${radius}px` : undefined,
        border:
          borderWidth && borderWidth > 0
            ? `${borderWidth}px solid ${borderColor || "#000"}`
            : "none",

        boxSizing: "border-box",

        width: width && width.trim() !== "" ? width : "100%",
        height: height && height.trim() !== "" ? height : "100%",
      }}
    >
      <Content />
    </div>
  );
};

const FlexItemConfig = {
  inline: true,
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

    // Flex container behavior
    direction: {
      type: "select",
      label: "Flex Direction",
      options: [
        { label: "row", value: "row" },
        { label: "row-reverse", value: "row-reverse" },
        { label: "column", value: "column" },
        { label: "column-reverse", value: "column-reverse" },
      ],
      defaultValue: "row",
    },
    justifyContent: {
      type: "select",
      label: "Justify Content",
      options: [
        { label: "flex-start", value: "flex-start" },
        { label: "center", value: "center" },
        { label: "flex-end", value: "flex-end" },
        { label: "space-between", value: "space-between" },
        { label: "space-around", value: "space-around" },
        { label: "space-evenly", value: "space-evenly" },
      ],
      defaultValue: "flex-start",
    },
    alignItems: {
      type: "select",
      label: "Align Items",
      options: [
        { label: "stretch", value: "stretch" },
        { label: "flex-start", value: "flex-start" },
        { label: "center", value: "center" },
        { label: "flex-end", value: "flex-end" },
        { label: "baseline", value: "baseline" },
      ],
      defaultValue: "stretch",
    },

    // Padding
    paddingTop: { type: "number", label: "Padding Top", defaultValue: 0 },
    paddingBottom: { type: "number", label: "Padding Bottom", defaultValue: 0 },
    paddingLeft: { type: "number", label: "Padding Left", defaultValue: 0 },
    paddingRight: { type: "number", label: "Padding Right", defaultValue: 0 },

    // Margin
    marginTop: { type: "number", label: "Margin Top", defaultValue: 0 },
    marginBottom: { type: "number", label: "Margin Bottom", defaultValue: 0 },
    marginLeft: { type: "number", label: "Margin Left", defaultValue: 0 },
    marginRight: { type: "number", label: "Margin Right", defaultValue: 0 },

    // Appearance
    background: { type: "text", label: "Background", defaultValue: "#ffffff" },
    radius: { type: "number", label: "Border Radius", defaultValue: 8 },
    borderWidth: {
      type: "number",
      label: "Border Width (px)",
      defaultValue: 0,
      min: 0,
      max: 10,
    },
    borderColor: {
      type: "text",
      label: "Border Color",
      defaultValue: "#000000",
    },

    // Size
    width: { type: "text", label: "Width (px, %, auto)", defaultValue: "100%" },
    height: {
      type: "text",
      label: "Height (px, %, auto)",
      defaultValue: "100%",
    },

    // Slot
    content: { type: "slot" },
  },

  defaultProps: {
    grow: 0,
    shrink: 1,
    basis: "auto",
    order: 0,
    alignSelf: "auto",
    direction: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    background: "#ffffff",
    radius: 8,
    borderWidth: 0,
    borderColor: "#000000",
    width: "100%",
    height: "100%",
  },

  render: ({ puck, content, ...props }) => (
    <FlexItem puck={puck} content={content} {...props} />
  ),
};

export { FlexItem, FlexItemConfig };
