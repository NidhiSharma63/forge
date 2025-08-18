import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { ButtonConfig } from "./puckComponents/Button";
import { CardConfig } from "./puckComponents/Card";
import { FlexContainerConfig } from "./puckComponents/Flex";
import { FlexItemConfig } from "./puckComponents/FlexItem";
import { GridConfig } from "./puckComponents/Grid";
import { HeadingConfig } from "./puckComponents/Heading";
import { ImageBlockConfig } from "./puckComponents/Image";
import { ParagraphConfig } from "./puckComponents/Paragraph";
import { SpacerConfig } from "./puckComponents/Spacer";
// Create Puck component config
const config = {
  components: {
    Grid: GridConfig,
    "Grid Cell": CardConfig,
    Image: ImageBlockConfig,
    Flex: FlexContainerConfig,
    "Flex Item": FlexItemConfig,
    Spacer: SpacerConfig,
    Button: ButtonConfig,
    HeadingBlock: HeadingConfig,
    ParagraphBlock: ParagraphConfig,
  },
};

// Describe the initial data
const initialData = {};

// Save the data to your database
const save = (data) => {};

// Render Puck editor
export default function Editor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}
