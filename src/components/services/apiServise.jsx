const BASE_URL = 'https://pixabay.com';
const API_KEY = '24164302-3681b8365083488cf2ea75540';

const fetchImages = async (query, page) => {
  const respons = await fetch(
    `${BASE_URL}/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
  );
  const data = await respons.json();
  return data;
};

export default fetchImages;
