import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  renderGifList = () => {
    const { gifs, selectGif } = this.props;
    return gifs.map(({ id }) => {
      return <Gif id={id} key={id} selectGif={selectGif} />;
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
