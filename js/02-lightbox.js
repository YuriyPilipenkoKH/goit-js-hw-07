import { galleryItems } from './gallery-items.js';


const imageGallery = document.querySelector('.gallery');

const cardsMarkup = createImageGallery(galleryItems);
imageGallery.innerHTML = cardsMarkup
imageGallery.addEventListener('click',onPhotoClick)

function createImageGallery(galleryItems) {
    return galleryItems.map((gallery) => {
        return `
            <a class="gallery__item" href="${gallery.original}">
                <img class="gallery__image" src="${gallery.preview}" alt="${gallery.description}" />
            </a>`;
        })
        .join('');
    }

    function onPhotoClick(e) {

        e.preventDefault();
        if (e.target.nodeName !== "IMG") {
            return;
        }
       
    
        imageGallery.addEventListener('keydown', (e) => {
            if (e.code === "Escape") {
                instance.close()
            }
        });
    };    

    const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });