import React from "react";

class InputPassword extends React.Component {
  render() {
    return (
      <input
        className="form-control form-control-user"
        type="password"
        id="exampleInputPassword"
        placeholder="Password"
        name="password"
      />
    );
  }
}

export default InputPassword;
