import React from "react";

const Alert = (props) => {
  // Only render if there's a message
  if (!props.message) {
    return null;
  }

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
