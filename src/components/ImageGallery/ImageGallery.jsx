import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchImages from '../services/apiServise';
import Modal from '../Modal';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
    showModal: false,
    imageForModal: '',
    title: '',
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

  onClickGalleryItem = (src, alt) => {
    this.toggleModal();
    this.setState({ imageForModal: src, title: alt });
  };

  render() {
    const { images, status, showModal, imageForModal, title } = this.state;

    if (status === 'idle') {
      return <div>give me name</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'resolved') {
      return (
        <ul>
          <ImageGalleryItem onClick={this.onClickGalleryItem} data={images}></ImageGalleryItem>
          {showModal && (
            <Modal onClick={this.onClickGalleryItem}>
              <img src={imageForModal} alt={title} />
            </Modal>
          )}
        </ul>
      );
    }
  }
}

export default ImageGallery;
