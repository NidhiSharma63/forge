import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";
import React from "react";

// Create Puck component config
const config = {
  components: {
    Grid: {
      fields: {
        columns: {
          type: "number",
          label: "Columns",
          min: 1,
          max: 6,
          defaultValue: 2,
        },
        gap: { type: "number", label: "Gap", defaultValue: 8 },
        innerHeight: {
          type: "number",
          label: "Inner Height",
          defaultValue: 100,
        },
      },
      render: ({ children, columns, gap, innerHeight }) => {
        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap,
              height: `${innerHeight}px`,
            }}
            className="p-4 border rounded"
          >
            {React.Children.map(children, (child) => (
              <div className="border bg-gray-50 p-2">{child}</div>
            ))}
          </div>
        );
      },
    },
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
          options: ["normal", "bold", "lighter"],
          defaultValue: "bold",
        },
        textAlign: {
          type: "select",
          label: "Align",
          options: ["left", "center", "right"],
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
