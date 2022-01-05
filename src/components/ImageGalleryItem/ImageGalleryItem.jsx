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
export default ImageGalleryItem;
