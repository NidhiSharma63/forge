import { Resizable } from "re-resizable";
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
            console.log(child.style);
            const Tag = child.type; // like 'div', 'p', 'button'
            return (
              <Resizable
                key={child.id}
                enable={{
                  top: true,
                  right: true,
                  bottom: true,
                  left: true,
                  topRight: true,
                  bottomRight: true,
                  bottomLeft: true,
                  topLeft: true,
                }}
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
                onResizeStop={(e, direction, ref, d) => {
                  setData((prevData) =>
                    prevData.map((item) =>
                      item.id === "root"
                        ? {
                            ...item,
                            children: item.children.map((c) =>
                              c.id === child.id
                                ? {
                                    ...c,
                                    style: {
                                      ...c.style,
                                      width: ref.style.width,
                                      height: ref.style.height,
                                    },
                                  }
                                : c
                            ),
                          }
                        : item
                    )
                  );
                }}
              >
                <Tag
                  style={{
                    border: "1px dashed #ccc",
                    margin: "5px",
                    height: "100%",
                    width: "100%",
                  }}
                  className="p-2"
                >
                  {child.props.text}
                </Tag>
              </Resizable>
            );
          })}
      </div>
    </div>
  );
};

export default App;
