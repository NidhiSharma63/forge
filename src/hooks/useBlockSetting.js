import { useNode } from "@craftjs/core";
import { useState } from "react";
const useBlockSetting = () => {
  const {
    actions: { setProp },
    props, // access default values
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [marginValue, setMarginValue] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  const [paddingValue, setPaddingValue] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  // function handleChangeValueForMargin(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setMarginValue((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });

  //   // setProp((props) => (props.height = value));

  //   setProp((props) => {
  //     console.log("value changing");
  //     props.marginTop = `${value}px`; // ✅ this sets marginTop, marginBottom, etc
  //   });
  // }

  function handleChangeValueForMargin(event) {
    const name = event.target.name; // "top"
    const value = event.target.value;

    setMarginValue((prev) => ({
      ...prev,
      [name]: value,
    }));

    const capitalized = name.charAt(0).toUpperCase() + name.slice(1); // "Top"
    setProp((props) => {
      props[`margin${capitalized}`] = `${value}px`; // marginTop = "20px"
    });
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
