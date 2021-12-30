import React from 'react';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    imageQuery: '',
  };

  handleImageChange = event => {
    this.setState({ imageQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imageQuery.trim() === '') {
      alert('🦄 Wow so easy!');
      return;
    }
    this.props.onSubmit(this.state.imageQuery);
    this.setState({ imageQuery: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageQuery}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
