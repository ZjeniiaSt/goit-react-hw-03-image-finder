import './App.css';
import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    imageQuery: '',
  };

  onSearchForm = imageQuery => {
    this.setState({ imageQuery });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchForm} />
        <ImageGallery images={this.state.imageQuery} />
        <Toaster />
      </>
    );
  }
}

export default App;
