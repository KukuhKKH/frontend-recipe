import React, { Component } from "react";

class Header extends Component {
  render() {
    return <div className="header-area" id="headerArea">
  <div className="container">
    <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
      <div className="logo-wrapper"><a href="page-home.html"><img src="/template/img/bg-img/2.jpg" alt="" /></a></div>
      <div className="navbar--toggler" id="affanNavbarToggler" data-bs-toggle="offcanvas" data-bs-target="#affanOffcanvas" aria-controls="affanOffcanvas"><span className="d-block" /><span className="d-block" /><span className="d-block" /></div>
    </div>
  </div>
</div>
;
  }
}

export default Header;
