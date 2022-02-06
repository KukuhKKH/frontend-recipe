import React, { Component } from "react";

class Preloader extends Component {
  render() {
    return <div id="preloader">
              <div className="spinner-grow text-primary" role="status"><span className="visually-hidden">Mohon Tunggu...</span></div>
            </div>;
  }
}

export default Preloader;
