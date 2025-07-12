import ButtonWrapper from "@/common/ButtonWrapper";
import Button from "@/components/DraggableElements/Button";
import { useEditor } from "@craftjs/core";
import Block from "../DraggableElements/Block";
import Image from "../DraggableElements/Image";
import Text from "../DraggableElements/Text";
import Video from "../DraggableElements/Video";

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="border-2 border-blue-400">
      <h1 className="text-sm mb-3 text-center">Elements</h1>
      <div className="flex flex-col gap-4">
        <ButtonWrapper ref={(ref) => connectors.create(ref, <Block />)}>
          Block
        </ButtonWrapper>
        <ButtonWrapper ref={(ref) => connectors.create(ref, <Text />)}>
          Text
        </ButtonWrapper>
        <ButtonWrapper ref={(ref) => connectors.create(ref, <Button />)}>
          Button
        </ButtonWrapper>
        <ButtonWrapper ref={(ref) => connectors.create(ref, <Image />)}>
          Image
        </ButtonWrapper>
        <ButtonWrapper ref={(ref) => connectors.create(ref, <Video />)}>
          Video
        </ButtonWrapper>
      </div>
    </div>
  );
};
