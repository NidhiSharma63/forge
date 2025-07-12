import { useEditor } from "@craftjs/core";
import Button from "./Button";
import Card from "./Card";

const Setting = () => {
  const { connectors } = useEditor();
  return (
    <div>
      {" "}
      <button
        className="button-picker"
        ref={(ref) => connectors.create(ref, <Button />)}
        variant="contained"
      >
        Button
      </button>
      <button
        className="button-picker"
        ref={(ref) => connectors.create(ref, <Card />)}
        variant="contained"
      >
        Card
      </button>
    </div>
  );
};

export default Setting;
