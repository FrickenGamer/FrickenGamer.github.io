// JavaScript for toggling videos and remembering playback positions

// Get references to the video player and text box
const videoPlayer = document.getElementById('video-player');
const textBox = document.getElementById('text-box');

// Array of video sources
const videoSources = [
    'videos/dialogue.1_video.mp4',
    'videos/dialogue.2_video.1.mp4'
];

// Variables to track playback positions for each video
let playbackPositions = [0, 0]; // Index 0 for video01, index 1 for video02
let currentVideoIndex = 0; // Start with the first video
let isMutedInitially = true; // Tracks if the videos are muted

// Function to switch to the other video
function switchVideo() {
    // Unmute the video if this is the first click
    if (isMutedInitially) {
        videoPlayer.muted = false;
        isMutedInitially = false; // Set flag to false after the first unmute
    }

    // Save the current video's playback position
    playbackPositions[currentVideoIndex] = videoPlayer.currentTime;

    // Determine the next video index (toggle between 0 and 1)
    currentVideoIndex = (currentVideoIndex === 0) ? 1 : 0;

    // Switch the video source and set the playback position
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.currentTime = playbackPositions[currentVideoIndex];

    // Play the new video
    videoPlayer.play();
}

// Set initial video properties
videoPlayer.muted = true; // Start video muted

// Add event listener for clicking the text box
textBox.addEventListener('click', switchVideo);
