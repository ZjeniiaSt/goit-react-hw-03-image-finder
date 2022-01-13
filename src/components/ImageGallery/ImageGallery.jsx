import PropTypes from 'prop-types';
import { Ul } from './ImageGallery.style';
import ImageGalleryItem from '../ImageGalleryItem/';
import propTypes from 'prop-types';

function ImageGallery({ images, onOpenModal }) {
  return (
    <Ul>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onOpenModal={onOpenModal}
        />
      ))}
    </Ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({ id: propTypes.number.isRequired })),
  onOpenModal: propTypes.func.isRequired,
};

export default ImageGallery;
