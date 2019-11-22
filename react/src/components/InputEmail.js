import React from "react";

class InputEmail extends React.Component {
  render() {
    return (
      <input
        className="form-control form-control-user"
        type="email"
        id="exampleInputEmail"
        aria-describedby="emailHelp"
        placeholder="Enter Email Address..."
        name="email"
      />
    );
  }
}

export default InputEmail;
