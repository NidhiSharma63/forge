import { useState } from "react";
import dummyData from "../dummyData";
import Component from "./Component";
const App = () => {
  let draggedElement = null;
  const [data, setData] = useState(dummyData);

  const handleDragStart = (event) => {
    draggedElement = event.target;
  };

  const handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const draggedElementDropped = event.currentTarget; // get where the element is dropped
    console.log(draggedElementDropped);
    // setData((prev) =>
    //    prev.map((item) =>
    //      item.id === "root"
    //        ? {
    //            ...item,
    //            children:
    //          }
    //        : item
    //    )
    //  );
    // setData((prev) =>
    //   prev.map((item) =>
    //     item.id === "root"
    //       ? {
    //           ...item,
    //           children: [
    //             ...item.children,
    //             {
    //               id: Math.random(),
    //               type: draggedElement.tagName.toLowerCase(),
    //               props: { text: draggedElement.innerHTML },
    //               children: [],
    //               style: {
    //                 height:
    //                   draggedElement.tagName.toLowerCase() === "div"
    //                     ? "40px"
    //                     : draggedElement.getBoundingClientRect().height,
    //                 width:
    //                   draggedElement.tagName.toLowerCase() === "div"
    //                     ? "100%"
    //                     : draggedElement.getBoundingClientRect().width,
    //               },
    //             },
    //           ],
    //         }
    //       : item
    //   )
    // );
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Needed to allow drop
  };
  // console.log(data);

  return (
    <div className="mt-3.5">
      <div
        draggable="true"
        className="w-[300px] h-[20px] border-2 border-b-amber-950 m-auto resize"
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
