import Canvas from "@/components/Canvas/Canvas";
import {
  Block,
  Button,
  Image,
  Text,
  Video,
} from "@/components/DraggableElements/index";
import { Toolbox } from "@/components/elementsPanel/ElementsPanel";
import { Editor } from "@craftjs/core";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <header className="h-[50px] w-full">Header</header>
      <Editor
        resolver={{
          Text,
          Image,
          Video,
          Button,
          Block,
        }}
      >
        <div className="grid h-[calc(100vh-50px)] grid-cols-6 gap-4 w-full border-2 border-amber-950">
          <Toolbox />
          <Canvas />
          <div className="text-3xl border-2 border-blue-400">01</div>
        </div>
      </Editor>
    </div>
  );
};

export default App;
