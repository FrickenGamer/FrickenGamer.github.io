// List of background images corresponding to each text box.
const images = [
    'images/image1.jpg', // Background for Box 1
    'images/image2.jpg', // Background for Box 2
    'images/image3.jpg', // Background for Box 3
    'images/image4.jpg', // Background for Box 4
    'images/image5.jpg'  // Background for Box 5
];

// Function to change the background image
function changeBackgroundImage(index) {
    document.body.style.backgroundImage = `url(${images[index]})`;
}

// Set up the IntersectionObserver
const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the viewport
    threshold: 0.5 // The text box is considered in view if 50% of it is visible
};

// Callback function for when an intersection occurs
function handleIntersect(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const boxId = entry.target.id;
            const boxIndex = parseInt(boxId.replace('box', '')) - 1;
            changeBackgroundImage(boxIndex);
        }
    });
}

// Create the observer with the callback function and options
const observer = new IntersectionObserver(handleIntersect, observerOptions);

// Observe each text box
document.querySelectorAll('.text-box').forEach(box => observer.observe(box));
