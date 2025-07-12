import Button from "@/components/DraggableElements/Button";
import { useEditor } from "@craftjs/core";
export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div>
      <button
        ref={(ref) => connectors.create(ref, <Button />)}
        variant="contained"
      >
        Buttons
      </button>
    </div>
  );
};
