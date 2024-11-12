// JavaScript to randomly toggle between videos while remembering playback positions and unmuting after first click

// Get references to the video player and text box
const videoPlayer = document.getElementById('video-player');
const textBox = document.getElementById('text-box');

// Array of video sources
const videoSources = [
    'videos/truismVideo_Xiong.mp4',
    'videos/truismUnmuted_Xiong.mp4',
    'videos/hunt_Showdown.mp4'
];

// Variables to store playback positions for each video
let playbackPositions = [0, 0, 0]; // Corresponds to video01, video02, and video03
let currentVideoIndex = 0; // Start with the first video in the array
let isMutedInitially = true; // Tracks if videos are initially muted

// Function to switch to a random video
function switchRandomVideo() {
    // Unmute if this is the first click
    if (isMutedInitially) {
        videoPlayer.muted = false;
        isMutedInitially = false;
    }

    // Save the current video position
    playbackPositions[currentVideoIndex] = videoPlayer.currentTime;

    // Select a random video index that is not the current video
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * videoSources.length);
    } while (newIndex === currentVideoIndex);

    // Update the current video index
    currentVideoIndex = newIndex;

    // Change video source and set it to resume from the saved position
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.currentTime = playbackPositions[currentVideoIndex];

    // Play the new video
    videoPlayer.play();
}

// Event listener for clicking the text box to switch videos
textBox.addEventListener('click', switchRandomVideo);

// Set initial video properties
videoPlayer.muted = true; // Start video muted
