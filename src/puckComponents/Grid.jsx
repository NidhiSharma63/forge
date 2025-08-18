// Grid.jsx
const Grid = ({
  columns,
  rows,
  gap,
  width,
  height,
  padding,
  margin,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  background,
  borderWidth,
  borderColor,
  radius,
  content: Content,
}) => {
  return (
    <Content
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: rows ? `repeat(${rows}, auto)` : undefined,
        gap: gap ?? 0,
        width: width || "100%",
        height: height || "auto",
        padding: padding ? `${padding}px` : undefined,
        margin: margin ? `${margin}px` : undefined,
        alignItems: alignItems || "stretch",
        justifyItems: justifyItems || "stretch",
        alignContent: alignContent || "stretch",
        justifyContent: justifyContent || "stretch",
        background: background || "#fff",
        border:
          borderWidth && borderWidth > 0
            ? `${borderWidth}px solid ${borderColor || "#000"}`
            : "none",
        borderRadius: radius ? `${radius}px` : undefined,
        boxSizing: "border-box",
      }}
      className="border rounded"
    />
  );
};

const GridConfig = {
  fields: {
    columns: {
      type: "number",
      label: "Columns",
      min: 1,
      max: 12,
      defaultValue: 2,
    },
    rows: { type: "number", label: "Rows (optional)" },
    gap: { type: "number", label: "Gap", defaultValue: 8 },

    // Size
    width: { type: "text", label: "Width (px, %, auto)", defaultValue: "100%" },
    height: {
      type: "text",
      label: "Height (px, %, auto)",
      defaultValue: "auto",
    },

    // Spacing
    padding: { type: "number", label: "Padding", defaultValue: 0 },
    margin: { type: "number", label: "Margin", defaultValue: 0 },

    // Alignment
    alignItems: {
      type: "select",
      label: "Align Items",
      options: ["start", "center", "end", "stretch"],
      defaultValue: "stretch",
    },
    justifyItems: {
      type: "select",
      label: "Justify Items",
      options: ["start", "center", "end", "stretch"],
      defaultValue: "stretch",
    },
    alignContent: {
      type: "select",
      label: "Align Content",
      options: [
        "start",
        "center",
        "end",
        "stretch",
        "space-between",
        "space-around",
      ],
      defaultValue: "stretch",
    },
    justifyContent: {
      type: "select",
      label: "Justify Content",
      options: [
        "start",
        "center",
        "end",
        "stretch",
        "space-between",
        "space-around",
      ],
      defaultValue: "stretch",
    },

    // Appearance
    background: { type: "text", label: "Background", defaultValue: "#ffffff" },
    borderWidth: { type: "number", label: "Border Width", defaultValue: 0 },
    borderColor: {
      type: "text",
      label: "Border Color",
      defaultValue: "#000000",
    },
    radius: { type: "number", label: "Border Radius", defaultValue: 8 },

    // Slot
    content: { type: "slot" },
  },

  defaultProps: {
    columns: 2,
    rows: undefined,
    gap: 8,
    width: "100%",
    height: "auto",
    padding: 0,
    margin: 0,
    alignItems: "stretch",
    justifyItems: "stretch",
    alignContent: "stretch",
    justifyContent: "stretch",
    background: "#fff",
    borderWidth: 0,
    borderColor: "#000",
    radius: 8,
  },

  render: ({ content, ...props }) => <Grid {...props} content={content} />,
};

export { Grid, GridConfig };
