import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
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
      <>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGallery images={this.state.imageQuery} />
      </>
    );
  }
}

export default App;
