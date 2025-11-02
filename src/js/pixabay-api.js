import axios from 'axios';

const apiKey = '53055755-295da906459d55ec9ae018533';
const baseUrl = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(baseUrl, { params });
  return response.data;
}
