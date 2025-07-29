
const images = document.querySelectorAll('.slider-img');
const thumbs = document.querySelectorAll('.thumbnails img');
let current = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        thumbs[i].classList.toggle('active-thumb', i === index);
    });
    current = index;
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

// Set initial image active
showImage(0);