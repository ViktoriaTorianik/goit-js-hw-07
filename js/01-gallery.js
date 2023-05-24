import { galleryItems } from './gallery-items.js';

const galleryEl =document.querySelector(".gallery");

function createPictureCards(items){
   return galleryItems.map(({preview, original, description}) => {
     return
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
    }).join("");

}
console.log(createPictureCards(galleryItems));
const pictureCards = createPictureCards(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', pictureCards);
