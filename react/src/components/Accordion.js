import React from "react";

class Accordion extends React.Component {
  render() {
    return (
      <ul className="nav navbar-nav text-light" id="accordionSidebar">
        <li className="nav-item" role="presentation" />
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="register.html">
            <i className="fas fa-window-maximize" />
            <span>Register</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="index.html">
            <i className="fas fa-window-maximize" />
            <span>Login</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="pos.html">
            <i className="fas fa-window-maximize" />
            <span>Main Screen</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="inventory.html">
            <i className="fas fa-window-maximize" />
            <span>Inventory</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" href="dashboard.html">
            <i className="fas fa-window-maximize" />
            <span>Sales Performance</span>
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link active" href="profile.html">
            <i className="fas fa-window-maximize" />
            <span>Profile</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default Accordion;
