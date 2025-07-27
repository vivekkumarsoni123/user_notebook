import React from "react";

const Alert = (props) => {
<<<<<<< HEAD
  // Only render if there's a message
  if (!props.message) {
    return null;
  }

=======
>>>>>>> 0ff13c9ce0d46fc7c036af237508b66719335a44
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
