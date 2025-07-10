const App = () => {
  let draggedElement = null;

  const handleDragStart = (event) => {
    draggedElement = event.target;
  };
  const handleDrop = (event) => {
    event.preventDefault();

    const draggedElementDropped = event.currentTarget; // get where the element is dropped

    // append the element in root
    // first clone the element the append coz it directly append the original element not the copy
    const clone = draggedElement.cloneNode(true);
    draggedElementDropped.appendChild(clone);
    // if dragged element type is div then make it full height and width and also add some height to it
    clone.style.width = "100%";
    clone.style.height = "50px";

    console.log("Dropped:", draggedElement, "on", draggedElementDropped);
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Needed to allow drop
  };

  return (
    <div className="mt-3.5">
      <div
        draggable="true"
        className="w-[300px] h-[40px] border-2 border-b-amber-950 m-auto"
        onDrag={handleDragStart}
      >
        Drag Me
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        id="root"
        className="canvas w-[800px] h-[400px] border-2 border-amber-600 m-auto mt-3.5"
      />
    </div>
  );
};

export default App;
