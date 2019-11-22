import React from "react";

class StickyFooter extends React.Component {
  render() {
    return (
      <footer className="bg-white sticky-footer">
        <div className="container my-auto">
          <div className="text-center my-auto copyright">
            <span>Copyright © Brand 2019</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default StickyFooter;
