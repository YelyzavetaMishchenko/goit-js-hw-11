import axios from 'axios';

const API_KEY = '48548888-6a688bae8a9a8d1a3f9b35105';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });

    return response.data.hits;
  } catch (error) {
    console.error('The field is empty', error);
    return [];
  }
}
