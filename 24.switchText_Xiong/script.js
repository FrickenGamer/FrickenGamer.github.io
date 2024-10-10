// Array of sentences
const sentences = [
	"Paper snake sculpture.",
    "A 90% in my art class.",
    "Reminds me off my love for oragami and craft.",
    "A snake in the Grass = A deceitful person.",
    "I have never feared snakes, because I believe a snake understands when you are his friend, and if he understands you are his friend, he will not bite. — Rudyard Kipling"
];

// Get elements
const snakeImage = document.getElementById('snakeImage');
const textBox = document.getElementById('textBox');

// Change text on image click
let currentIndex = 0;
snakeImage.addEventListener('click', () => {
    textBox.textContent = sentences[currentIndex];
    currentIndex = (currentIndex + 1) % sentences.length; // Loop through the array
});
