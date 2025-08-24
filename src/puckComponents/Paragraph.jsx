// Paragraph.jsx
const Paragraph = ({
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
  const defaultText = "This is a sample paragraph. You can edit this text.";

  return (
    <p
      ref={puck?.dragRef}
      style={{
        fontSize: fontSize ? `${fontSize}px` : "16px",
        fontWeight: fontWeight || "400",
        color: color || "#374151", // Tailwind gray-700
        textAlign: textAlign || "left",
        lineHeight: lineHeight || "1.6",
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
    </p>
  );
};

const ParagraphConfig = {
  inline: true,
  fields: {
    text: {
      type: "text",
      label: "Text",
      defaultValue: "This is a sample paragraph. You can edit this text.",
    },
    fontSize: {
      type: "number",
      label: "Font Size (px)",
      defaultValue: 16,
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
      defaultValue: "400",
    },
    color: {
      type: "text",
      label: "Text Color",
      defaultValue: "#374151",
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
      defaultValue: 1.6,
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
    text: "This is a sample paragraph. You can edit this text.",
    fontSize: 16,
    fontWeight: "400",
    color: "#374151",
    textAlign: "left",
    lineHeight: 1.6,
    letterSpacing: 0,
    marginTop: 0,
    marginBottom: 0,
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  render: ({ puck, ...props }) => <Paragraph puck={puck} {...props} />,
};

export { Paragraph, ParagraphConfig };
