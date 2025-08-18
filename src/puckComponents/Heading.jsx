// Heading.jsx
const Heading = ({
  type, // h1, h2, h3, ...
  text,
  fontSize,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  letterSpacing,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  puck,
}) => {
  const defaultText = "This is a sample heading.";

  const Tag = type || "h1"; // dynamic heading tag

  return (
    <Tag
      ref={puck?.dragRef}
      style={{
        fontSize: fontSize ? `${fontSize}px` : "24px",
        fontWeight: fontWeight || "700",
        color: color || "#111827", // Tailwind gray-900
        textAlign: textAlign || "left",
        lineHeight: lineHeight || "1.3",
        letterSpacing: letterSpacing || "normal",
        marginTop: marginTop ? `${marginTop}px` : "0px",
        marginBottom: marginBottom ? `${marginBottom}px` : "0px",
        marginLeft: marginLeft ? `${marginLeft}px` : "0px",
        marginRight: marginRight ? `${marginRight}px` : "0px",
        width: width || "100%",
      }}
      contentEditable
      suppressContentEditableWarning
      className="cursor-text"
    >
      {text || defaultText}
    </Tag>
  );
};

const HeadingConfig = {
  inline: true,
  fields: {
    type: {
      type: "select",
      label: "Heading Type",
      options: [
        { label: "H1", value: "h1" },
        { label: "H2", value: "h2" },
        { label: "H3", value: "h3" },
        { label: "H4", value: "h4" },
        { label: "H5", value: "h5" },
        { label: "H6", value: "h6" },
      ],
      defaultValue: "h1",
    },
    text: {
      type: "text",
      label: "Text",
      defaultValue: "This is a sample heading.",
    },
    fontSize: {
      type: "number",
      label: "Font Size (px)",
      defaultValue: 24,
      min: 12,
      max: 72,
    },
    fontWeight: {
      type: "select",
      label: "Font Weight",
      options: [
        { label: "Light", value: "300" },
        { label: "Normal", value: "400" },
        { label: "Medium", value: "500" },
        { label: "Bold", value: "700" },
      ],
      defaultValue: "700",
    },
    color: {
      type: "text",
      label: "Text Color",
      defaultValue: "#111827",
    },
    textAlign: {
      type: "select",
      label: "Text Align",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
        { label: "Right", value: "right" },
        { label: "Justify", value: "justify" },
      ],
      defaultValue: "left",
    },
    lineHeight: {
      type: "number",
      label: "Line Height",
      defaultValue: 1.3,
      min: 1,
      max: 3,
      step: 0.1,
    },
    letterSpacing: {
      type: "number",
      label: "Letter Spacing (px)",
      defaultValue: 0,
      min: -2,
      max: 10,
    },
    marginTop: {
      type: "number",
      label: "Margin Top (px)",
      defaultValue: 0,
      min: 0,
      max: 100,
    },
    marginBottom: {
      type: "number",
      label: "Margin Bottom (px)",
      defaultValue: 16,
      min: 0,
      max: 100,
    },
    marginLeft: {
      type: "number",
      label: "Margin Left (px)",
      defaultValue: 0,
      min: 0,
      max: 100,
    },
    marginRight: {
      type: "number",
      label: "Margin Right (px)",
      defaultValue: 0,
      min: 0,
      max: 100,
    },
    width: {
      type: "text",
      label: "Width (px, %, auto)",
      defaultValue: "100%",
    },
  },
  defaultProps: {
    type: "h1",
    text: "This is a sample heading.",
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    textAlign: "left",
    lineHeight: 1.3,
    letterSpacing: 0,
    marginTop: 0,
    marginBottom: 16,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  render: ({ puck, ...props }) => <Heading puck={puck} {...props} />,
};

export { Heading, HeadingConfig };
