import ButtonWrapper from "@/common/ButtonWrapper";
import Button from "@/components/DraggableElements/Button";
import { useEditor } from "@craftjs/core";
export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="border-2 border-blue-400">
      <h1 className="text-sm mb-3 text-center">Elements</h1>
      <ButtonWrapper
        ref={(ref) => connectors.create(ref, <Button />)}
        variant="contained"
      >
        Buttons
      </ButtonWrapper>
    </div>
  );
};
