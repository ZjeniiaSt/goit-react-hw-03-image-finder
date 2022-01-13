import './App.css';
import React, { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import fetchImages from './components/services';
import Load from './components/Loader';
import Modal from './components/Modal';
import OnButton from './components/Button/Button';

import styled from 'styled-components';

class App extends Component {
  state = {
    imageQuery: '',
    images: [],
    status: 'idle',
    page: 1,
    showModal: false,
    largeImageURL: '',
    alt: '',
  };

  onSearchForm = imageQuery => {
    this.setState({ imageQuery });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevState.imageQuery;
    const nextImage = this.state.imageQuery;

    if (prevImage !== nextImage) {
      this.setState({ status: 'pending' });

      fetchImages(nextImage, 1)
        .then(data => {
          if (data.total === 0) {
            toast.error('Nothing found');
            return;
          } else {
            this.setState({ images: data.hits, status: 'resolved', page: prevState.page + 1 });
          }
        })
        .catch(error => toast.error('Something wrong'));
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onOpenModal = event => {
    this.setState({ largeImageURL: event.target.dataset.source, alt: event.target.alt });
    this.toggleModal();
  };

  onBtnClick = event => {
    const nextImage = this.state.imageQuery;
    const page = this.state.page;

    fetchImages(nextImage, page).then(data =>
      this.setState(prevState => {
        return {
          page: prevState.page + 1,
          images: [...prevState.images, ...data.hits],
          status: 'resolved',
        };
      }),
    );

    this.scrollPage();
  };

  scrollPage = () => {
    setTimeout(() => {
      window.scrollBy({
        top: document.documentElement.clientHeight - 100,
        behavior: 'smooth',
      });
    }, 500);
  };

  render() {
    const { images, status, showModal, largeImageURL, alt } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.onSearchForm} />
        <Toaster />
        {status === 'idle' && <></>}
        {status === 'pending' && (
          <div>
            <Load />
          </div>
        )}
        {status === 'resolved' && (
          <ImageGallery images={images} onOpenModal={this.onOpenModal}></ImageGallery>
        )}
        {images.length > 11 && <OnButton onBtnClick={this.onBtnClick} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={alt} width="750" />
          </Modal>
        )}
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
