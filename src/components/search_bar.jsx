import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  // componentWillMount() {
  //   console.log("SEARCH_BAR WILL MOUNT");
  // }

  // componentDidMount() {
  //   console.log("SEARCH_BAR DID MOUNT");
  // }

  handleUpdated = (event) => {
    // Change the state of term
    const { searchFunction } = this.props;
    this.setState({
      term: event.target.value
    });
    searchFunction(event.target.value);
  }

  render() {
    // console.log("SEARCH_BAR RENDER");
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
