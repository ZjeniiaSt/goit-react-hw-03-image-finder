const fetchImages = async (query, page) => {
  const respons = await fetch(
    `https://pixabay.com/api/?key=24164302-3681b8365083488cf2ea75540&q=${query}&image_type=photo&per_page=12&page=${page}`,
  );
  const data = await respons.json();
  return data;
};

export default fetchImages;
