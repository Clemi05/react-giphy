/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import giphyApi from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = 'z45leHbVfCfS0rA5jqY5PLdHOhQaBFNO';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'VbT5nZY3ZjXQA'
    };

    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    // Call the Giphy API
    giphyApi(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
