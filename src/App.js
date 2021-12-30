import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageInfo from './components/ImageGalleryItem/';

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
        <ImageInfo image={this.state.imageQuery} />
      </div>
    );
  }
}

export default App;
