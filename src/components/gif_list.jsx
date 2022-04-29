import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderGifList = () => {
    return this.props.gifs.map(({ id }) => {
      return <Gif id={id} key={id} selectGif={this.props.selectGif} />;
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderGifList()}
      </div>
    );
  }
}

export default GifList;
