import {
  Block,
  BlockContainer,
  Button,
  Container,
  Image,
  Text,
  Video,
} from "@/components/DraggableElements/index";
import { Toolbox } from "@/components/elementsPanel/ElementsPanel";
import SettingsPanel from "@/components/StyleSettings/SettingPanel";
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
          Block,
          BlockContainer,
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
          <div className=" border-2 border-blue-400">
            <p className=" text-sm text-center">Settings</p>
            <SettingsPanel />
          </div>
        </div>
      </Editor>
    </div>
  );
};

export default App;


