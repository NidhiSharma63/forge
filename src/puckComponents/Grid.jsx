const Grid = ({ columns, gap, innerHeight, color, content: Content }) => {
  return (
    <Content
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        height: `${innerHeight}px`,
        backgroundColor: color,
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
      max: 6,
    },
    gap: { type: "number", label: "Gap" },
    innerHeight: {
      type: "number",
      label: "Inner Height",
    },
    color: {
      type: "text",
      label: "Color",
      defaultValue: "#fff",
    },
    // 👇 ab slot define karna hoga
    content: {
      type: "slot",
    },
  },
  defaultProps: {
    columns: 2,
    gap: 8,
    innerHeight: 200,
    color: "#fff",
  },
  render: ({ content, ...props }) => <Grid {...props} content={content} />,
};

export { Grid, GridConfig };
