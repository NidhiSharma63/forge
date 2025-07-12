import { Editor, Element, Frame } from "@craftjs/core";
import Button from "./Button";
import Card from "./Card";
import Setting from "./Setting";

const EditorComp = () => {
  return (
    <div className="editor" style={{ padding: 20 }}>
      <Editor
        resolver={{
          Card,
          Button,
        }}
      >
        <Frame>
          <Element
            is="div"
            canvas
            style={{ minHeight: 200, padding: 10, border: "1px dashed gray" }}
          ></Element>
        </Frame>
        <Setting />
      </Editor>
    </div>
  );
};

export default EditorComp;
