const Card = ({ spanCol, spanRow, content: Content, puck }) => {
  return (
    <div
      ref={puck.dragRef}
      style={{
        gridColumn: `span ${spanCol}`,
        gridRow: `span ${spanRow}`,
      }}
      className="flex flex-col items-center justify-start border bg-white shadow rounded min-h-[100px]"
    >
      <div className="w-full flex-1">
        {Content ? (
          <Content />
        ) : (
          <div className="border border-dashed bg-gray-50 text-black text-center"></div>
        )}
      </div>
    </div>
  );
};

const CardConfig = {
  inline: true,
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
    content: { type: "slot" }, // 👈 same as Grid
  },
  defaultProps: {
    text: "Card",
    spanCol: 1,
    spanRow: 1,
  },
  render: ({ content, ...props }) => <Card {...props} content={content} />,
};

export { Card, CardConfig };
