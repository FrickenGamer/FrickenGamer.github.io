// JavaS// JavaScript to handle image click and show the text box
document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('clickableImage');
    const textbox = document.getElementById('textbox');

    image.addEventListener('click', function() {
        textbox.classList.toggle('hidden'); // Toggle the visibility of the text box
    });
});