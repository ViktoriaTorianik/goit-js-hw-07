import { galleryItems } from './gallery-items.js';

const galleryEl =document.querySelector(".gallery");

function createPictureCards(items){
   return items.map(item => {
     
`<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="small-image.jpg"
    data-source="large-image.jpg"
    alt="Image description"
  />
</a>
</li>`
    }).join("");
}

const pictureCards = createPictureCards(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', pictureCards);
