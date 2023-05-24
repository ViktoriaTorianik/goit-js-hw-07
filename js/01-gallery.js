import { galleryItems } from './gallery-items.js';

const galleryEl =document.querySelector(".gallery");

function createPictureCards(items){
   return galleryItems.map(item => {
     
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
console.log(createPictureCards(galleryItems));
const pictureCards = createPictureCards(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', pictureCards);
