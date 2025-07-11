import { Resizable } from "re-resizable";

const Component = ({ child, onDrop, handleDragOver }) => {
  const Tag = child.type;
  return (
    <Resizable
      key={child.id}
      size={{
        width:
          typeof child.style?.width === "number"
            ? `${child.style.width}px`
            : child.style?.width || "100%",
        height:
          typeof child.style?.height === "number"
            ? `${child.style.height}px`
            : child.style?.height || "100%",
      }}
    >
      <Tag
        id={child.id}
        className={`w-full h-full  ${
          child.type === "div" ? "bg-amber-600" : ""
        } m-2`}
        onDrop={child.type === "div" ? onDrop : undefined}
        onDragOver={child.type === "div" ? handleDragOver : undefined}
      >
        {child.props?.text}

        {/* Recursively render children */}
        {child.children?.map((nestedChild) => (
          <Component
            key={nestedChild.id}
            child={nestedChild}
            handleDrop={onDrop}
            handleDragOver={handleDragOver}
          />
        ))}
      </Tag>
    </Resizable>
  );
};

export default Component;
