import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Component from "./Component";

const App = () => {
  const draggedElementRef = useRef(null);
  const [data, setData] = useState([
    {
      id: "root",
      children: [
        {
          id: uuidv4(),
          type: "div",
          props: { text: "I'm the Second" },
          children: [],
          style: {
            height: "40px",
            width: "98%",
          },
        },
      ],
    },
  ]);

  const handleDragStart = (event) => {
    draggedElementRef.current = event.target;
  };

  const handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const dropTargetId = event.currentTarget.id;
    const draggedElement = draggedElementRef.current;

    console.log("Dropped on:", dropTargetId);

    const newElement = {
      id: Math.random(),
      type: draggedElement.tagName.toLowerCase(),
      props: { text: draggedElement.innerHTML },
      children: [],
      style: {
        ...draggedElement.getBoundingClientRect,
        height:
          draggedElement.tagName.toLowerCase() === "div"
            ? "40px"
            : draggedElement.getBoundingClientRect().height,
        width:
          draggedElement.tagName.toLowerCase() === "div"
            ? "100%"
            : draggedElement.getBoundingClientRect().width,
      },
    };

    function addElementById(node, dropTargetId, newElement) {
      // 1. Base case – agar current node hi dropTarget hai
      if (node.id === dropTargetId) {
        console.log("FOUND");
        return {
          ...node,
          children: [...node.children, newElement],
        };
      }

      // 2. Agar iske children mein aage search karna hai
      if (node.children && node.children.length > 0) {
        return {
          ...node,
          children: node.children.map((child) =>
            addElementById(child, dropTargetId, newElement)
          ),
        };
      }

      // 3. Koi match nahi mila to same node return kar do
      return node;
    }

    setData((prevData) => {
      const updated = prevData.map((item) => {
        if (item.id === "root") {
          const updatedNode = addElementById(item, dropTargetId, newElement);
          console.log({ updatedNode });

          // Check: agar target mila hi nahi, to root ke children mein add karo
          // const isSame = JSON.stringify(item) === JSON.stringify(updatedNode);
          if (dropTargetId === "root") {
            return {
              ...item,
              children: [...item.children, newElement],
            };
          }

          return updatedNode;
        }
        return item;
      });

      return updated;
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Needed to allow drop
  };

  useEffect(() => {
    // console.log(data?.[0]?.children);
  }, [data]);

  return (
    <div className="mt-3.5">
      <div
        draggable="true"
        className="w-[300px] h-[20px] border-2 border-b-amber-950 m-auto resize"
        onDragStart={handleDragStart}
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
            return (
              <Component
                key={Math.random()}
                onDrop={handleDrop}
                child={child}
                handleDragOver={handleDragOver}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
