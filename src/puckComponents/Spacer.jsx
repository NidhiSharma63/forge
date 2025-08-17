const Spacer = ({ height, background, puck }) => {
  return (
    <div
      ref={puck?.dragRef}
      style={{
        height: height ? `${height}px` : "20px",
        background: background || "transparent",
        width: "100%",
      }}
    />
  );
};

const SpacerConfig = {
  inline: true,
  fields: {
    height: {
      type: "number",
      label: "Height (px)",
      defaultValue: 20,
      min: 1,
      max: 1000,
    },
    background: {
      type: "text",
      label: "Background Color",
      defaultValue: "transparent",
    },
  },
  defaultProps: {
    height: 20,
    background: "transparent",
  },
  render: ({ puck, ...props }) => <Spacer puck={puck} {...props} />,
};

export { Spacer, SpacerConfig };
