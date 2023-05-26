import { galleryItems } from './gallery-items.js';

const galleryEl =document.querySelector(".gallery");

const pictureCards = createPictureCards(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', pictureCards);
 

function createPictureCards(items){
   return galleryItems.map(({preview, original, description}) => {
     return`<li class="gallery__item">
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
galleryEl.addEventListener ("click", (onClickLinkLink))

function onClickLinkLink (e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG'){
   return
  }
  const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`)
  {
    instance.show()     
  }
}