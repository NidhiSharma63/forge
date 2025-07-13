import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

export const Text = ({ text = "Text" }) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))}>
      <ContentEditable
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
      />
    </div>
  );
};

Text.craft = { displayName: "Text" };
export default Text;
