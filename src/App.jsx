import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import { GridConfig } from "./puckComponents/Grid";

// Create Puck component config
const config = {
  components: {
    Grid: GridConfig,
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
          label: "Text",
          defaultValue: "Heading Block",
        },
        fontSize: {
          type: "number",
          label: "Font Size",
          defaultValue: 24,
        },
        fontWeight: {
          type: "select",
          label: "Weight",
          options: [
            { label: "Normal", value: "normal" },
            { label: "Lighter", value: "lighter" },
            { label: "Bold", value: "bold" },
          ],
        },
        textAlign: {
          type: "select",
          label: "Align",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
          defaultValue: "left",
        },
        color: {
          type: "text",
          label: "Color",
          defaultValue: "#000000",
        },
      },
      defaultProps: {
        children: "Heading Block",
        fontSize: 24,
        fontWeight: "medium",
        textAlign: "left",
        color: "#000000",
      },

      render: ({ children, fontSize, fontWeight, textAlign, color }) => {
        return (
          <h1
            style={{
              fontSize: `${fontSize}px`,
              fontWeight,
              textAlign,
              color,
            }}
          >
            {children}
          </h1>
        );
      },
    },
    ParagraphBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => {
        return <p>{children || "Lorem ipsum dolor sit amet."}</p>;
      },
    },
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
