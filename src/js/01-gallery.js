import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');
const imageMarkup = createMarkupPhotos(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

function createMarkupPhotos(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionPosition: `bottom`,
  captionDelay: 250,
});
