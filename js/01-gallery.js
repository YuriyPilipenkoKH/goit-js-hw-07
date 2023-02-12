import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};
const elAll = [];
let url;

galleryItems.map(galleryItem => {
    const elA = document.createElement('a');
    elA.classList.add('gallery__link');
    elA.setAttribute('href', galleryItem.original);
    
    const elImg = document.createElement('img');
    elImg.classList.add('gallery__image');
    elImg.setAttribute('src', galleryItem.preview);
    elImg.setAttribute('data-src', galleryItem.original)
    elImg.setAttribute('alt', galleryItem.description);

    elA.appendChild(elImg);
    elAll.push(elA);
});

refs.gallery.append(...elAll);

refs.gallery.addEventListener('click', (e) => {
    if (e.target.nodeName === "IMG") {
        getUrlImg(e);

        const instance = basicLightbox.create(`<img width="1400" height="900" src="${url}">`);

        openModal(instance);

        window.addEventListener('keyup', (e) => {
            if(e.code === "Escape") {
                closeModal(instance);
            };
        },{ once: true });
    };
});

function getUrlImg(e){
    e.preventDefault();
    const target = e.target;
    url = target.dataset.src;
};


function openModal(a){
	a.show()
}

function closeModal(a){
    a.close()
}
