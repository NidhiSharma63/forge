const ImageUploadField = ({ value, onChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result); // base64 set
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {value && (
        <div className="mt-2">
          <img
            src={value}
            alt="preview"
            className="max-w-full h-auto border rounded"
          />
        </div>
      )}
    </div>
  );
};

const ImageBlock = ({
  src,
  alt,
  width,
  height,
  borderRadius,
  shadow,
  align,
  objectFit,
  puck,
}) => {
  return (
    <div
      ref={puck?.dragRef}
      style={{
        display: "flex",
        justifyContent: align,
        width,
        height,
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          width={"100%"}
          height={"100%"}
          style={{
            borderRadius,
            boxShadow:
              shadow === "true" ? "0 4px 12px rgba(0,0,0,0.15)" : "none",
            objectFit,
          }}
        />
      ) : (
        <div
          style={{
            width,
            height,
            background: "#f0f0f0",
            border: "1px dashed #ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
          }}
        >
          Upload an image
        </div>
      )}
    </div>
  );
};

const ImageBlockConfig = {
  inline: true,
  fields: {
    src: {
      type: "custom", // 👈 custom field
      label: "Upload Image",
      render: ImageUploadField, // 👈 render use hota hai
      defaultValue: "",
    },
    alt: { type: "text", label: "Alt Text", defaultValue: "Sample Image" },
    width: { type: "number", label: "Width", defaultValue: 300 },
    height: { type: "number", label: "Height", defaultValue: 200 },
    borderRadius: { type: "number", label: "Border Radius", defaultValue: 8 },
    shadow: {
      type: "select",
      label: "Shadow",
      options: [
        { label: "Yes", value: "true" },
        { label: "No", value: "false" },
      ],
      defaultValue: "true",
    },
    align: {
      type: "select",
      label: "Align",
      options: [
        { label: "Left", value: "flex-start" },
        { label: "Center", value: "center" },
        { label: "Right", value: "flex-end" },
      ],
      defaultValue: "center",
    },
    objectFit: {
      type: "select",
      label: "Object Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
        { label: "Fill", value: "fill" },
        { label: "None", value: "none" },
      ],
      defaultValue: "cover",
    },
  },
  defaultProps: {
    src: "",
    alt: "Sample Image",
    width: 300,
    height: 200,
    borderRadius: 8,
    shadow: "true",
    align: "center",
    objectFit: "cover",
  },
  render: ({ puck, ...props }) => <ImageBlock {...props} puck={puck} />,
};

export { ImageBlock, ImageBlockConfig };
