import PropTypes from 'prop-types';

function ImageGalleryItem({ data, onOpenModal }) {
  return (
    <>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li key={id}>
            <img src={webformatURL} alt={tags} data-source={largeImageURL} onClick={onOpenModal} />
          </li>
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
