import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadBtn = document.querySelector(".load-btn");
const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionPosition: "bottom",
    captionsData: "alt"
})

export function createGallery(images) {
    const markUp = images.map(item => `
        <li class="gallery-item">
        <a class="gallery-link" href="${item.largeImageURL}">
        <img
        class="gallery-img"
        src="${item.webformatURL}"
        alt="${item.tags}"
        width="360" />
        </a>
        <div class="descr">
       <p class="descr-label">Likes <span class="descr-span">${item.likes}</span></p>
       <p class="descr-label">Views <span class="descr-span">${item.views}</span></p>
       <p class="descr-label">Comments <span class="descr-span">${item.comments}</span></p>
       <p class="descr-label">Downloads <span class="descr-span">${item.downloads}</span></p>
       </div>
        </li>
        `).join("");
    
        galleryList.insertAdjacentHTML("beforeend", markUp);
        lightbox.refresh();
};

export function clearGallery() {
    galleryList.innerHTML = "";
}

export function showLoader() {
    loader.style.display = 'block';
}

export function hideLoader() {
    loader.style.display = 'none';
}

export function showLoadMoreButton(){
    loadBtn.style.display = "block";
}

export function hideLoadMoreButton() {
    loadBtn.style.display = 'none';
}