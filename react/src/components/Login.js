import React from "react";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import CheckRem from "./CheckRem";
import LoginButton from "./LoginButton";
import ForgotButton from "./ForgotButton";
import CreateButton from "./CreateButton";

class Login extends React.Component {
  render() {
    return (
      <div className="p-5">
        <div className="text-center">
          <h4 className="text-dark mb-4">Welcome Back!</h4>
        </div>
        <form className="user">
          <div className="form-group">
            <InputEmail />
          </div>
          <div className="form-group">
            <InputPassword />
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox small">
              <div className="form-check">
                <input
                  className="form-check-input custom-control-input"
                  type="checkbox"
                  id="formCheck-1"
                />
                <CheckRem />
              </div>
            </div>
          </div>
          <LoginButton />
          <hr />
          {}
          <hr />
        </form>
        <div className="text-center">
          <ForgotButton />
        </div>
        <div className="text-center">
          <CreateButton />
        </div>
      </div>
    );
  }
}

export default Login;
