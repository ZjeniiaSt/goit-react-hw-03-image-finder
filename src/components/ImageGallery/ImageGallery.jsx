import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import fetchImages from '../services/apiServise';
import Modal from '../Modal';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevProps.images;
    const nextImage = this.props.images;

    if (prevImage !== nextImage) {
      this.setState(prevState => {
        return {
          status: 'pending',
        };
      });

      fetchImages(nextImage, 1).then(data => {
        if (data.total === 0) {
          alert('Error');
          return this.setState({ status: 'idle' });
        } else {
          return this.setState(prevState => {
            return {
              images: data.hits,
              status: 'resolved',
              page: prevState.page + 1,
            };
          });
        }
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onOpenModal = event => {
    this.setState({ largeImageURL: event.target.dataset.source });
    this.toggleModal();
  };

  render() {
    const { images, status, showModal, largeImageURL } = this.state;

    if (status === 'idle') {
      return <div>give me name</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryItem data={images} onOpenModal={this.onOpenModal}></ImageGalleryItem>
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} alt="" />
            </Modal>
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
