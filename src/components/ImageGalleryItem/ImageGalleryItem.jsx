function ImageItem({ data, onClickGalleryItem }) {
  return (
    <>
      {data.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <li key={id} onClick={() => onClickGalleryItem(largeImageURL, tags)} ssss>
            <img src={webformatURL} alt={tags} />
          </li>
        );
      })}
    </>
  );
}
export default ImageItem;
