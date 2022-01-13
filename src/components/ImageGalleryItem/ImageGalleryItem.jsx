import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.style';

function ImageGalleryItem({ id, tags, webformatURL, largeImageURL, onOpenModal }) {
  return (
    <Li key={id}>
      <Img src={webformatURL} alt={tags} data-source={largeImageURL} onClick={onOpenModal} />
    </Li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
export default ImageGalleryItem;
