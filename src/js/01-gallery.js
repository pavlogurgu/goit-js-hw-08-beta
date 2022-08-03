import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join("");
}


const onGalleryImageClick = (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(

    `<img src = "${event.target.dataset.source}"/>`)
    instance.show();
}




console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
galleryRef.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems))
galleryRef.addEventListener("click", onGalleryImageClick)
