function ImageItem({ image: { hits } }) {
  return (
    <>
      {hits.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} data-source={image.largeImageURL} alt={image.tags} />
        </li>
      ))}
    </>
  );
}
export default ImageItem;
