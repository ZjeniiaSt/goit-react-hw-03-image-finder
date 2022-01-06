import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem.style';

function ImageGalleryItem({ data, onOpenModal }) {
  return (
    <>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <Li key={id}>
            <Img src={webformatURL} alt={tags} data-source={largeImageURL} onClick={onOpenModal} />
          </Li>
        );
      })}
    </>
  );
}

ImageGalleryItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
