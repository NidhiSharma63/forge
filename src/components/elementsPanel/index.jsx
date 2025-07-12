import Button from "@/components/DraggableElements/Button";
import { useEditor } from "@craftjs/core";
export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="border-2 border-blue-400">
      <button
        ref={(ref) => connectors.create(ref, <Button />)}
        variant="contained"
      >
        Buttons
      </button>
    </div>
  );
};
