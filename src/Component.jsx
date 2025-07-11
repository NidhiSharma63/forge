import { Resizable } from "re-resizable";
const Component = ({ child }) => {
  const Tag = child.type;
  return (
    <Resizable
      key={child.id}
      size={{
        width:
          typeof child.style.width === "number"
            ? `${child.style.width}px`
            : child.style.width,
        height:
          typeof child.style.height === "number"
            ? `${child.style.height}px`
            : child.style.height,
      }}
    >
      <Tag
        style={{
          border: "1px dashed #ccc",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          id={child.id}
          className={`bg-amber-950 w-full h-full ${
            Tag === "div" ? "visible" : "hidden"
          }`}
          // onDrop={handleDrop}
          // onDragOver={handleDragOver}
        >
          {child.props.text}
          {/* 🔁 Recursive rendering of children */}
          {child.children?.length > 0 &&
            child.children.map((nestedChild) => (
              <Component key={nestedChild.id} child={nestedChild} />
            ))}
        </div>
      </Tag>
    </Resizable>
  );
};

export default Component;
