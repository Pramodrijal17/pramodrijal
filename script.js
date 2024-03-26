// script.js

// Function to get English date in format: Month DD, YYYY
function getEnglishDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
}

// Update English date
document.getElementById('englishDate').innerText = getEnglishDate();

// Image slider functionality
let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');

// Function to show the current image
function showImage(index) {
    // Hide all images
    images.forEach(image => {
        image.style.display = 'none';
    });

    // Show the image at the specified index
    images[index].style.display = 'block';
}

// Function to move to the next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);

// Automatically move to the next image every 5 seconds
setInterval(nextImage, 5000);

