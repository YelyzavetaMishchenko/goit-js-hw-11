import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images, gallery) {
  gallery.innerHTML = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a href="${largeImageURL}" class="gallery-item">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p>❤️ ${likes} | 👀 ${views} | 💬 ${comments} | ⬇️ ${downloads}</p>
        </div>
      </a>
    `
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
