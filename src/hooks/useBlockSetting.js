import { useNode } from "@craftjs/core";
import { useState } from "react";
const useBlockSetting = () => {
  const {
    actions: { setProp },
  } = useNode((node) => ({
    width: node.data.props.width,
    height: node.data.props.height,
  }));

  const [marginValue, setMarginValue] = useState({
    Top: 0,
    Bottom: 0,
    Left: 0,
    Right: 0,
  });

  const [paddingValue, setPaddingValue] = useState({
    // paddingTop: 0,
    // paddingBottom: 0,
    // paddingLeft: 0,
    // paddingRight: 0,
    Top: 0,
    Bottom: 0,
    Left: 0,
    Right: 0,
  });

  function handleChangeValueForMargin(event) {
    const name = event.target.name;
    const value = event.target.value;
    setMarginValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setProp((props) => (props[`margin${name}`] = value));
  }

  function handleChangeValueForPadding(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPaddingValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setProp((props) => (props[`padding${name}`] = value));
  }
  return {
    marginValue,
    paddingValue,
    handleChangeValueForPadding,
    handleChangeValueForMargin,
  };
};

export default useBlockSetting;
