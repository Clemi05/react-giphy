import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src = 'https://media1.giphy.com/media/rVzvUgOpJlQkS06ZMO/giphy.gif';
    return (
      <img src={src} alt="basketball gif" className="gif"/>
    );
  }
}

export default Gif;
