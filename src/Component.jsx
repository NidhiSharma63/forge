import { Resizable } from "re-resizable";
const Component = ({ child, handleDrop, handleDragOver }) => {
  const Tag = child.type;
  console.log(Tag, "Tag");
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
      <div
        id={child.id}
        className="w-full h-full border border-amber-400 m-2"
        {...(child.type === "div"
          ? { onDrop: handleDrop, onDragOver: handleDragOver }
          : {})}
      >
        {/* Render actual tag */}
        <child.type className="text-white text-sm">
          {child.props?.text}
        </child.type>

        {/* Recursively render children */}
        {child.children?.map((nestedChild) => (
          <Component
            key={nestedChild.id}
            child={nestedChild}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>
    </Resizable>
  );
};

export default Component;
