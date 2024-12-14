// JavaScript to control video and audio playback and toggling

// Get references to video, audio, and buttons
const video = document.getElementById('video');
const audio = document.getElementById('audio');
const playButton = document.getElementById('play-button');
const switchAudioButton = document.getElementById('switch-audio-button');

// Array to store audio sources
const audioSources = [
    'audios/dialogue.1_Xiong.mp3',
    'audios/dialogue.2_Xiong.mp3'
];

let currentAudioIndex = 0; // Start with the first audio
let audioPositions = [0, 0]; // Playback positions for both audios

// Play video and audio when the "Play Video and Audio" button is clicked
playButton.addEventListener('click', () => {
    video.play();
    audio.play();
});

// Switch audio when the "Switch Audio" button is clicked
switchAudioButton.addEventListener('click', () => {
    // Save the current audio playback position
    audioPositions[currentAudioIndex] = audio.currentTime;

    // Switch to the other audio
    currentAudioIndex = (currentAudioIndex === 0) ? 1 : 0;
    audio.src = audioSources[currentAudioIndex];

    // Resume playback from the saved position
    audio.currentTime = audioPositions[currentAudioIndex];
    audio.play();
});
