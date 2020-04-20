import React from "react";

const ButtonComponent = ({ children, buttonFunctionality }) => {
  return (
    <button style={style} onClick={buttonFunctionality}>
      {children}
    </button>
  );
};
ButtonComponent.propTypes = {};
ButtonComponent.defaultProps = {
  buttonFunctionality: function() {
    console.log("Do nothing");
  }
};
const style = {
  backgroundColor: "white",
  color: "black",
  border: "2px solid grey",
  borderRadius: "12px"
};
export default ButtonComponent;
