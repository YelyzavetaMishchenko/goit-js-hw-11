import { fetchImages } from './pixabay-api.js';
import { renderImages } from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async e => {
  e.preventDefault();

  const query = e.target.elements.searchQuery.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'The field is empty!',
    });
    return;
  }

  gallery.innerHTML = '';
  loader.style.display = 'block';

  const images = await fetchImages(query);
  loader.style.display = 'none';

  if (images.length === 0) {
    iziToast.warning({
      title: 'Упс...',
      message: 'Изображения не найдены, попробуйте другой запрос.',
    });
    return;
  }

  renderImages(images, gallery);
});
