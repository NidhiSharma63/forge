// DivBlock.jsx
const toPx = (v) => (typeof v === "number" ? `${v}px` : v || undefined);
const orUndefined = (v) =>
  v === "" || v === null || v === undefined ? undefined : v;

const DivBlock = ({
  // layout
  display,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  overflow,
  // position
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  // background
  backgroundColor,
  backgroundImageUrl,
  backgroundImageRaw,
  backgroundSize,
  backgroundRepeat,
  backgroundPosition,
  backgroundAttachment,
  // border
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  // effects
  boxShadow,
  opacity,
  pointerEvents,
  // children
  content: Content,
}) => {
  const style = {
    display,
    width: orUndefined(width),
    height: orUndefined(height),
    minWidth: orUndefined(minWidth),
    minHeight: orUndefined(minHeight),
    maxWidth: orUndefined(maxWidth),
    maxHeight: orUndefined(maxHeight),

    margin: toPx(margin),
    marginTop: toPx(marginTop),
    marginRight: toPx(marginRight),
    marginBottom: toPx(marginBottom),
    marginLeft: toPx(marginLeft),

    padding: toPx(padding),
    paddingTop: toPx(paddingTop),
    paddingRight: toPx(paddingRight),
    paddingBottom: toPx(paddingBottom),
    paddingLeft: toPx(paddingLeft),

    overflow,

    position,
    top: orUndefined(top),
    right: orUndefined(right),
    bottom: orUndefined(bottom),
    left: orUndefined(left),
    zIndex: zIndex ?? undefined,

    backgroundColor,
    // If raw CSS is provided (e.g., linear-gradient(...)), use that; else use URL if present
    backgroundImage: backgroundImageRaw
      ? backgroundImageRaw
      : backgroundImageUrl
      ? `url(${backgroundImageUrl})`
      : undefined,
    backgroundSize,
    backgroundRepeat,
    backgroundPosition,
    backgroundAttachment,

    borderWidth: borderWidth != null ? toPx(borderWidth) : undefined,
    borderStyle,
    borderColor,
    borderRadius: toPx(borderRadius),
    borderTopLeftRadius: toPx(borderTopLeftRadius),
    borderTopRightRadius: toPx(borderTopRightRadius),
    borderBottomRightRadius: toPx(borderBottomRightRadius),
    borderBottomLeftRadius: toPx(borderBottomLeftRadius),

    boxShadow: orUndefined(boxShadow),
    opacity: opacity != null ? opacity : undefined,
    pointerEvents,
    boxSizing: "border-box",
  };

  return <Content style={style} />;
};

const DivBlockConfig = {
  fields: {
    // Layout
    display: {
      type: "select",
      label: "Display",
      options: [
        { label: "block", value: "block" },
        { label: "inline-block", value: "inline-block" },
        { label: "flex", value: "flex" },
        { label: "grid", value: "grid" },
        { label: "inline", value: "inline" },
      ],
      defaultValue: "block",
    },
    width: {
      type: "text",
      label: "Width (e.g. 100%, 800px)",
      defaultValue: "100%",
    },
    height: {
      type: "text",
      label: "Height (e.g. auto, 400px)",
      defaultValue: "auto",
    },
    minWidth: { type: "text", label: "Min Width", defaultValue: "" },
    minHeight: { type: "text", label: "Min Height", defaultValue: "" },
    maxWidth: { type: "text", label: "Max Width", defaultValue: "" },
    maxHeight: { type: "text", label: "Max Height", defaultValue: "" },

    // Spacing
    margin: { type: "number", label: "Margin (all)", defaultValue: 0 },
    marginTop: { type: "number", label: "Margin Top", defaultValue: 0 },
    marginRight: { type: "number", label: "Margin Right", defaultValue: 0 },
    marginBottom: { type: "number", label: "Margin Bottom", defaultValue: 0 },
    marginLeft: { type: "number", label: "Margin Left", defaultValue: 0 },

    padding: { type: "number", label: "Padding (all)", defaultValue: 16 },
    paddingTop: { type: "number", label: "Padding Top", defaultValue: 0 },
    paddingRight: { type: "number", label: "Padding Right", defaultValue: 0 },
    paddingBottom: { type: "number", label: "Padding Bottom", defaultValue: 0 },
    paddingLeft: { type: "number", label: "Padding Left", defaultValue: 0 },

    overflow: {
      type: "select",
      label: "Overflow",
      options: [
        { label: "visible", value: "visible" },
        { label: "hidden", value: "hidden" },
        { label: "auto", value: "auto" },
        { label: "scroll", value: "scroll" },
      ],
      defaultValue: "visible",
    },

    // Position
    position: {
      type: "select",
      label: "Position",
      options: [
        { label: "static", value: "static" },
        { label: "relative", value: "relative" },
        { label: "absolute", value: "absolute" },
        { label: "fixed", value: "fixed" },
        { label: "sticky", value: "sticky" },
      ],
      defaultValue: "static",
    },
    top: { type: "text", label: "Top (e.g. 0, 10px, 10%)", defaultValue: "" },
    right: { type: "text", label: "Right", defaultValue: "" },
    bottom: { type: "text", label: "Bottom", defaultValue: "" },
    left: { type: "text", label: "Left", defaultValue: "" },
    zIndex: { type: "number", label: "z-index", defaultValue: 1 },

    // Background
    backgroundColor: {
      type: "text",
      label: "Background Color",
      defaultValue: "#ffffff",
    },
    backgroundImageUrl: {
      type: "text",
      label: "Background Image URL",
      defaultValue: "",
    },
    backgroundImageRaw: {
      type: "text",
      label: "Background Image (raw CSS, e.g. linear-gradient(...))",
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
      type: "text",
      label: "Background Position (e.g. center, 20% 50%)",
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

    // Border
    borderWidth: { type: "number", label: "Border Width", defaultValue: 0 },
    borderStyle: {
      type: "select",
      label: "Border Style",
      options: [
        { label: "none", value: "none" },
        { label: "solid", value: "solid" },
        { label: "dashed", value: "dashed" },
        { label: "dotted", value: "dotted" },
        { label: "double", value: "double" },
      ],
      defaultValue: "solid",
    },
    borderColor: {
      type: "text",
      label: "Border Color",
      defaultValue: "#e5e7eb",
    },

    borderRadius: {
      type: "number",
      label: "Border Radius (all)",
      defaultValue: 8,
    },
    borderTopLeftRadius: {
      type: "number",
      label: "Radius TL",
      defaultValue: 0,
    },
    borderTopRightRadius: {
      type: "number",
      label: "Radius TR",
      defaultValue: 0,
    },
    borderBottomRightRadius: {
      type: "number",
      label: "Radius BR",
      defaultValue: 0,
    },
    borderBottomLeftRadius: {
      type: "number",
      label: "Radius BL",
      defaultValue: 0,
    },

    // Effects
    boxShadow: {
      type: "text",
      label: "Box Shadow (raw CSS)",
      defaultValue: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    },
    opacity: { type: "number", label: "Opacity (0–1)", defaultValue: 1 },
    pointerEvents: {
      type: "select",
      label: "Pointer Events",
      options: [
        { label: "auto", value: "auto" },
        { label: "none", value: "none" },
      ],
      defaultValue: "auto",
    },

    // Children
    content: { type: "slot" },
  },

  defaultProps: {
    display: "block",
    width: "100%",
    height: "auto",
    minWidth: "",
    minHeight: "",
    maxWidth: "",
    maxHeight: "",

    margin: 0,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,

    padding: 16,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,

    overflow: "visible",

    position: "static",
    top: "",
    right: "",
    bottom: "",
    left: "",
    zIndex: 1,

    backgroundColor: "#ffffff",
    backgroundImageUrl: "",
    backgroundImageRaw: "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "scroll",

    borderWidth: 0,
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,

    boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    opacity: 1,
    pointerEvents: "auto",
  },

  render: ({ content, ...props }) => <DivBlock {...props} content={content} />,
};

export { DivBlock, DivBlockConfig };
