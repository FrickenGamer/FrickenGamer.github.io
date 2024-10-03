// JavaScript Document
let images = ['images/pic.jpg', 'images/pic1.jpg', 'images/pic3.jpg'];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('slideshowImage').src = images[currentImageIndex];
}
