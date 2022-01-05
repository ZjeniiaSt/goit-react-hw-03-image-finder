import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import fetchImages from '../services/apiServise';
import Modal from '../Modal';
import Button from '../Button';
import Load from '../Loader';
import toast from 'react-hot-toast';

class ImageGallery extends Component {
  state = {
    images: [],
    status: 'idle',
    page: 1,
    showModal: false,
    largeImageURL: '',
    alt: '',
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
          toast.error(`Nothing found`);
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
    this.setState({ largeImageURL: event.target.dataset.source, alt: event.target.alt });
    this.toggleModal();
  };

  onBtnClick = event => {
    const nextImage = this.props.images;
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
  };

  render() {
    const { images, status, showModal, largeImageURL, alt } = this.state;

    if (status === 'idle') {
      return <></>;
    }

    if (status === 'pending') {
      return (
        <div>
          <Load />
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryItem data={images} onOpenModal={this.onOpenModal}></ImageGalleryItem>

          {images.length > 11 && <Button onBtnClick={this.onBtnClick} />}

          {showModal && (
            <Modal onClose={this.toggleModal}>
              <img src={largeImageURL} alt={alt} width="750" />
            </Modal>
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
