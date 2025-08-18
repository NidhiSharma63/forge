// FlexItem.jsx
const FlexItem = ({
  grow,
  shrink,
  basis,
  order,
  alignSelf,
  padding,
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
        flexGrow: grow ?? 0,
        flexShrink: shrink ?? 1,
        flexBasis: basis || "auto",
        order: order ?? 0,
        alignSelf: alignSelf || "auto",
        padding: padding ? `${padding}px` : undefined,
        background: background || "transparent", // ✅ always apply bg
        borderRadius: radius ? `${radius}px` : undefined,
        border:
          borderWidth && borderWidth > 0
            ? `${borderWidth}px solid ${borderColor || "#000"}`
            : "none",
        boxSizing: "border-box",
        minWidth: 0,

        // ✅ handle width as text or number
        width:
          typeof width === "number"
            ? `${width}px`
            : width && width.trim() !== ""
            ? width
            : undefined,

        // ✅ handle height properly
        height:
          typeof height === "number"
            ? `${height}px`
            : height && height.trim() !== ""
            ? height
            : undefined,
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

    // Appearance
    padding: { type: "number", label: "Padding", defaultValue: 12 },
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

    width: { type: "text", label: "Width (px, %, auto)", defaultValue: "" },
    height: { type: "text", label: "Height (px, %, auto)", defaultValue: "" },

    // Slot
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
    borderWidth: 0,
    borderColor: "#000000",
    width: "200px",
    height: "200px",
  },

  render: ({ puck, content, ...props }) => (
    <FlexItem puck={puck} content={content} {...props} />
  ),
};

export { FlexItem, FlexItemConfig };
