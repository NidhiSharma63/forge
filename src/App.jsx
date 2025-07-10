import { useState } from "react";
const App = () => {
  let draggedElement = null;
  const [data, setData] = useState([
    {
      id: "root",
      children: [],
    },
  ]);

  const handleDragStart = (event) => {
    draggedElement = event.target;
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const draggedElementDropped = event.currentTarget; // get where the element is dropped
    setData((prev) =>
      prev.map((item) =>
        item.id === "root"
          ? {
              ...item,
              children: [
                ...item.children,
                {
                  id: Math.random(),
                  type: draggedElement.tagName.toLowerCase(),
                  props: { text: draggedElement.innerHTML },
                  children: [],
                  style: {
                    height:
                      draggedElement.tagName.toLowerCase() === "div"
                        ? "40px"
                        : draggedElement.getBoundingClientRect().height,
                    width:
                      draggedElement.tagName.toLowerCase() === "div"
                        ? "100%"
                        : draggedElement.getBoundingClientRect().width,
                  },
                },
              ],
            }
          : item
      )
    );
    // console.log("Dropped:", draggedElement, "on", draggedElementDropped);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Needed to allow drop
  };
  // console.log(data);

  return (
    <div className="mt-3.5">
      <div
        draggable="true"
        className="w-[300px] h-[40px] border-2 border-b-amber-950 m-auto resize"
        onDrag={handleDragStart}
      >
        Drag Me
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        id="root"
        className="canvas w-[800px] h-[400px] border-2 border-amber-600 m-auto mt-3.5"
      >
        {data
          .find((item) => item.id === "root")
          ?.children.map((child) => {
            const Tag = child.type; // like 'div', 'p', 'button'
            return (
              <Tag
                key={child.id}
                style={{
                  width:
                    typeof child.style.width === "number"
                      ? `${child.style.width}px`
                      : child.style.width,
                  height:
                    typeof child.style.height === "number"
                      ? `${child.style.height}px`
                      : child.style.height,
                  border: "1px dashed #ccc",
                  margin: "5px",
                }}
                className="p-2"
              >
                {child.props.text}
              </Tag>
            );
          })}
      </div>
    </div>
  );
};

export default App;
