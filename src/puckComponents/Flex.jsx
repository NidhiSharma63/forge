// FlexContainer.jsx
const FlexContainer = ({
  direction,
  wrap,
  justify,
  alignItems,
  alignContent,
  gap,
  rowGap,
  columnGap,
  padding,
  backgroundColor,
  minHeight,
  width,
  backgroundImage,
  backgroundAttachment,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  content: Content,
}) => {
  const style = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: justify,
    alignItems,
    alignContent,
    gap: gap ?? 0,
    rowGap: rowGap ?? undefined,
    columnGap: columnGap ?? undefined,
    padding: padding ? `${padding}px` : undefined,
    backgroundColor, // ✅ background color property
    minHeight: minHeight ? `${minHeight}px` : undefined,
    width: width || "100%",
    boxSizing: "border-box",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundAttachment,
    backgroundPosition,
    backgroundRepeat,
    backgroundSize,
  };

  return <Content style={style} />;
};

const FlexContainerConfig = {
  fields: {
    direction: {
      type: "select",
      label: "Direction",
      options: [
        { label: "row", value: "row" },
        { label: "row-reverse", value: "row-reverse" },
        { label: "column", value: "column" },
        { label: "column-reverse", value: "column-reverse" },
      ],
      defaultValue: "row",
    },
    wrap: {
      type: "select",
      label: "Wrap",
      options: [
        { label: "nowrap", value: "nowrap" },
        { label: "wrap", value: "wrap" },
        { label: "wrap-reverse", value: "wrap-reverse" },
      ],
      defaultValue: "wrap",
    },
    justify: {
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
    alignContent: {
      type: "select",
      label: "Align Content (wrap only)",
      options: [
        { label: "stretch", value: "stretch" },
        { label: "flex-start", value: "flex-start" },
        { label: "center", value: "center" },
        { label: "flex-end", value: "flex-end" },
        { label: "space-between", value: "space-between" },
        { label: "space-around", value: "space-around" },
      ],
      defaultValue: "stretch",
    },

    // Spacing + sizing
    gap: { type: "number", label: "Gap", defaultValue: 16 },
    rowGap: { type: "number", label: "Row Gap", defaultValue: 0 },
    columnGap: { type: "number", label: "Column Gap", defaultValue: 0 },
    padding: { type: "number", label: "Padding", defaultValue: 16 },
    minHeight: { type: "number", label: "Min Height (px)", defaultValue: 200 },
    width: {
      type: "text",
      label: "Width (e.g. 100%, 1200px)",
      defaultValue: "100%",
    },

    // Appearance
    backgroundColor: {
      type: "text",
      label: "Background Color",
      defaultValue: "#ffffff",
    },
    backgroundImage: {
      type: "text",
      label: "Background Image (URL)",
      defaultValue: "",
    },
    backgroundSize: {
      type: "select",
      label: "Background Size",
      options: [
        { label: "cover", value: "cover" },
        { label: "contain", value: "contain" },
        { label: "auto", value: "auto" },
      ],
      defaultValue: "cover",
    },
    backgroundRepeat: {
      type: "select",
      label: "Background Repeat",
      options: [
        { label: "no-repeat", value: "no-repeat" },
        { label: "repeat", value: "repeat" },
        { label: "repeat-x", value: "repeat-x" },
        { label: "repeat-y", value: "repeat-y" },
      ],
      defaultValue: "no-repeat",
    },
    backgroundPosition: {
      type: "select",
      label: "Background Position",
      options: [
        { label: "center", value: "center" },
        { label: "top", value: "top" },
        { label: "bottom", value: "bottom" },
        { label: "left", value: "left" },
        { label: "right", value: "right" },
      ],
      defaultValue: "center",
    },
    backgroundAttachment: {
      type: "select",
      label: "Background Attachment",
      options: [
        { label: "scroll", value: "scroll" },
        { label: "fixed", value: "fixed" },
        { label: "local", value: "local" },
      ],
      defaultValue: "scroll",
    },
    // Slot for children
    content: { type: "slot" },
  },

  defaultProps: {
    direction: "row",
    wrap: "wrap",
    justify: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    gap: 16,
    rowGap: 0,
    columnGap: 0,
    padding: 16,
    backgroundColor: "#ffffff", // ✅ default bg
    minHeight: 200,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",
  },

  render: ({ content, ...props }) => (
    <FlexContainer {...props} content={content} />
  ),
};

export { FlexContainer, FlexContainerConfig };
