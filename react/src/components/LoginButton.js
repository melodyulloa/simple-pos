import React from "react";

class LoginButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-primary btn-block text-white btn-user"
        type="submit"
      >
        Login
      </button>
    );
  }
}

export default LoginButton;
