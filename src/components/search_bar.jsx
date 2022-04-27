import React, { Component } from "react";

class SearchBar extends Component {
  handleUpdated = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdated}
      />
    );
  }
}

export default SearchBar;
