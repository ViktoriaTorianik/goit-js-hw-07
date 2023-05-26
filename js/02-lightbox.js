import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector(".gallery");

const pictureCards = createPictureGalery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', pictureCards);

function createPictureGalery (item){
return galleryItems.map(({preview, original, description}) =>{
    return`
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `  
}).join("");
}
var lightbox = new SimpleLightbox('.gallery a', 
{captionsData: "alt", captionDelay: "250"})

