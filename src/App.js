import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageQuery: '',
  };

  handleSearchForm = imageQuery => {
    this.setState({ imageQuery });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGallery image={this.state.imageQuery} />
      </div>
    );
  }
}

export default App;
