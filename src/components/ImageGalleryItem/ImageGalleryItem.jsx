import { Component } from 'react';
import ImageData from './ImageData';

class ImageInfo extends Component {
  state = {
    image: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevProps.image;
    const nextImage = this.props.image;

    if (prevImage !== nextImage) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${nextImage}&page=1&key=24164302-3681b8365083488cf2ea75540&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`NOT FOUND ${nextImage}`));
        })
        .then(image => this.setState({ image, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }
  render() {
    const { image, error, status } = this.state;

    if (status === 'idle') {
      return <div>give me name</div>;
    }

    if (status === 'pending') {
      return <div>Loading...</div>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    if (status === 'resolved') {
      return <ImageData image={image} />;
    }
  }
}

export default ImageInfo;
