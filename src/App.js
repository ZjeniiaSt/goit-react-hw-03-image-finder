import './App.css';
import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import styled from 'styled-components';

class App extends Component {
  state = {
    imageQuery: '',
  };

  onSearchForm = imageQuery => {
    this.setState({ imageQuery });
  };

  render() {
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSearchForm} />
        <ImageGallery images={this.state.imageQuery} />
        <Toaster />
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export default App;
