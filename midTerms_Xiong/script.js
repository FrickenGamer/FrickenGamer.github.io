// Get all the text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Create an instance of IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    // Loop over the entries (text boxes)
    entries.forEach(entry => {
        // If the text box is in the viewport
        if (entry.isIntersecting) {
            // Get the background image from the 'data-image' attribute
            const backgroundImage = entry.target.getAttribute('data-image');
            // Change the background image of the body instantly
            document.body.style.backgroundImage = `url('images/${backgroundImage}')`;
        }
    });
}, {
    threshold: 0.5  // Trigger when 50% of the text box is in view
});

// Observe each text box
textBoxes.forEach(box => {
    observer.observe(box);
});
