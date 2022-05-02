import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  handleUpdated = (event) => {
    // Change the state of term
    const { searchFunction } = this.props;
    this.setState({
      term: event.target.value
    });
    searchFunction(event.target.value);
  }

  render() {
    const { term } = this.state;
    return (
      <input
        value={term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdated}
      />
    );
  }
}

export default SearchBar;
