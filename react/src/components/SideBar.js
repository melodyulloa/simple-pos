import React from "react";

class SideBar extends React.Component {
  render() {
    return (
      <a
        className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        href="#"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          <span>simplePOS</span>
        </div>
      </a>
    );
  }
}

export default SideBar;
