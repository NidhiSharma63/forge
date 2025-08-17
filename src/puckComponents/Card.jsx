const Card = ({ text, spanCol, spanRow, puck }) => {
  return (
    <div
      ref={puck.dragRef} // draggable
      style={{
        gridColumn: `span ${spanCol}`,
        gridRow: `span ${spanRow}`,
      }}
      className="flex items-center justify-center border bg-white shadow rounded p-4"
    >
      {text || "Card"}
    </div>
  );
};

const CardConfig = {
  inline: true, // inline => no wrapper
  fields: {
    text: { type: "text", label: "Text", defaultValue: "Card" },
    spanCol: {
      type: "number",
      label: "Span Columns",
      min: 1,
      max: 6,
      defaultValue: 1,
    },
    spanRow: {
      type: "number",
      label: "Span Rows",
      min: 1,
      max: 6,
      defaultValue: 1,
    },
  },
  defaultProps: {
    text: "Card",
    spanCol: 1,
    spanRow: 1,
  },
  render: ({ puck, ...props }) => <Card {...props} puck={puck} />,
};

export { Card, CardConfig };
