import React from "react";
import SideBar from "./SideBar";
import Accordion from "./Accordion";
import SideBarButton from "./SideBarButton";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div className="container-fluid d-flex flex-column p-0">
          <SideBar />
          <hr className="sidebar-divider my-0" />
          <Accordion />
          <div className="text-center d-none d-md-inline">
            <SideBarButton />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
