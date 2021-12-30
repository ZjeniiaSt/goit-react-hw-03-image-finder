function ImageData({ image: { hits } }) {
  return (
    <ul>
      {hits.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} data-source={hits.largeImageURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
}

export default ImageData;
