import React from "react";
import NavBar from "./NavBar";
import Dogs from "./Dogs";
import StickyFooter from "./StickyFooter";

class Profile extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <NavBar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content" data-component-navbarsearch>
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid">
                <button
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  id="sidebarToggleTop"
                  type="button"
                >
                  <i className="fas fa-bars" />
                </button>
                <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      className="bg-light form-control border-0 small"
                      type="text"
                      placeholder="Search for ..."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
                <ul className="nav navbar-nav flex-nowrap ml-auto">
                  <li className="nav-item dropdown d-sm-none no-arrow">
                    <a
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                    >
                      <i className="fas fa-search" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                      role="menu"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto navbar-search w-100">
                        <div className="input-group">
                          <input
                            className="bg-light form-control border-0 small"
                            type="text"
                            placeholder="Search for ..."
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary py-0"
                              type="button"
                            >
                              <i className="fas fa-search" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                </ul>
                <div className="d-none d-sm-block topbar-divider" />
              </div>
            </nav>
          </div>
          <Dogs />
        </div>
        <StickyFooter />
        <a className="border rounded d-inline scroll-to-top" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    );
  }
}

export default Profile;
