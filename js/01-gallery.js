import { galleryItems } from './gallery-items.js';

const imageGallery = document.querySelector('.gallery');

const cardsMarkup = createImageGallery(galleryItems);
imageGallery.innerHTML = cardsMarkup
imageGallery.addEventListener('click',onPhotoClick)


function createImageGallery(galleryItems) {
    return galleryItems.map((gallery) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${gallery.preview}"
                    data-source="${gallery.original}"
                    alt="${gallery.description}"
                />
                </a>
            </div>`;
        })
        .join('');
    }
 
function onPhotoClick(e) {

    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
    `)
    instance.show();

    imageGallery.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close()
        }
    });
};

