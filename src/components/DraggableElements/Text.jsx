import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";

export const Text = ({ text = "Text" }) => {
  const {
    connectors: { connect, drag },
    padding,
    border,
    borderRadius,
    width,
  } = useNode((node) => ({
    // read here all props properties and can be edit later using setting panel
    padding: node.data.props.padding,
    border: node.data.props.border,
    borderRadius: node.data.props.borderRadius,
    width: node.data.props.width,
  }));
  return (
    <div
      style={{
        padding,
        border,
        borderRadius,
        width,
      }}
      ref={(ref) => connect(drag(ref))}
    >
      <ContentEditable
        html={text}
        // onChange={(e) =>
        //   setProp(
        //     (props) =>
        //       (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
        //   )
        // }
        tagName="p"
      />
    </div>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    width: "fit-content",
  },
};
export default Text;
