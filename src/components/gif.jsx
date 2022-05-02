/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { id } = this.props;
    // Don't call render if props.id did not change
    return nextProps.id !== id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const { id } = this.props;
    console.log(`GIF RENDER ${id}`);
    // Guard clause
    if (!id) {
      return null;
    }

    const src = `https://media1.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
