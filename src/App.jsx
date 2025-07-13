import {
  Button,
  Container,
  Image,
  Text,
  Video,
} from "@/components/DraggableElements/index";
import { Toolbox } from "@/components/elementsPanel/ElementsPanel";
import { Editor, Element, Frame } from "@craftjs/core";

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
          Container,
        }}
      >
        <div className="grid h-[calc(100vh-100px)] grid-cols-6 gap-4 w-full border-2 border-amber-950">
          <Toolbox />
          <div className="col-span-4 border-2 border-amber-400">
            <Frame>
              <Element
                is={Container}
                canvas
                id="root-container"
                // style={{ height: "100%", border: "1px dashed grey" }}
              />
            </Frame>
          </div>
          <div className="text-3xl border-2 border-blue-400">01</div>
        </div>
      </Editor>
    </div>
  );
};

export default App;
