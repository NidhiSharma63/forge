const Button = ({
  text,
  background,
  color,
  fontSize,
  fontWeight,
  borderRadius,
  borderWidth,
  borderColor,
  paddingX,
  paddingY,
  hoverBackground,
  width,
  puck,
}) => {
  const defaultBackground = "#2563eb"; // Tailwind blue-600
  const defaultHover = "#1d4ed8"; // Tailwind blue-700

  return (
    <button
      ref={puck?.dragRef}
      style={{
        background: background || defaultBackground,
        color: color || "#ffffff",
        fontSize: fontSize ? `${fontSize}px` : "16px",
        fontWeight,
        borderRadius: borderRadius ? `${borderRadius}px` : "6px",
        border: `${borderWidth}px solid ${borderColor || defaultBackground}`,
        padding: `${paddingY}px ${paddingX}px`,
        width,
        transition: "all 0.2s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
      className="cursor-pointer"
      onMouseEnter={(e) => {
        e.currentTarget.style.background = hoverBackground || defaultHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = background || defaultBackground;
      }}
    >
      {text}
    </button>
  );
};

const ButtonConfig = {
  inline: true,
  fields: {
    text: { type: "text", label: "Text", defaultValue: "Click Me" },
    background: { type: "text", label: "Background", defaultValue: "#2563eb" },
    // hoverBackground: {
    //   type: "text",
    //   label: "Hover Background",
    //   defaultValue: "",
    // },
    color: { type: "text", label: "Text Color", defaultValue: "#ffffff" },
    fontSize: {
      type: "number",
      label: "Font Size (px)",
      defaultValue: 16,
    },
    fontWeight: {
      type: "select",
      label: "Font Weight",
      options: [
        { label: "Normal", value: "400" },
        { label: "Medium", value: "500" },
        { label: "Bold", value: "700" },
      ],
      defaultValue: "500",
    },
    borderRadius: {
      type: "number",
      label: "Border Radius (px)",
      defaultValue: 6,
    },
    borderWidth: {
      type: "select",
      label: "Border Width",
      options: [
        { label: "0px", value: 0 },
        { label: "1px", value: 1 },
        { label: "2px", value: 2 },
        { label: "3px", value: 3 },
        { label: "4px", value: 4 },
      ],
      defaultValue: 1,
    },
    borderColor: {
      type: "text",
      label: "Border Color",
      defaultValue: "#2563eb",
    },
    paddingX: {
      type: "number",
      label: "Padding X (px)",
      defaultValue: 16,
    },
    paddingY: {
      type: "number",
      label: "Padding Y (px)",
      defaultValue: 8,
    },
    width: {
      type: "text",
      label: "Width (px, %, auto)",
      defaultValue: "auto",
    },
  },
  defaultProps: {
    text: "Click Me",
    background: "#2563eb",
    hoverBackground: "",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#2563eb",
    paddingX: 16,
    paddingY: 8,
    width: "auto",
  },
  render: ({ puck, ...props }) => <Button puck={puck} {...props} />,
};

export { Button, ButtonConfig };
