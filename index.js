const slider = document.querySelector('.image-slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const radioButtons = document.querySelectorAll('.controls input[type="radio"]');

let intervalId;
let currentSlideIndex = 0; // Variable to track the current slide index

function moveSlide() {
    const currentSlide = slides[currentSlideIndex];
    slider.appendChild(currentSlide); // Move the current slide to the end of the slider
    currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Update current slide index
    updateRadioButtons(); // Update radio button styles
}

function autoSlide() {
    intervalId = setInterval(moveSlide, 3000); // Change interval to adjust slide speed (in milliseconds)
}

function restoreOriginalPosition() {
    // Restore the original order of slides
    slides.forEach((slide, index) => {
        slider.appendChild(slide);
        if (index === 0) {
            currentSlideIndex = 0; // Reset current slide index
        }
    });
    updateRadioButtons(); // Update radio button styles
}

function updateRadioButtons() {
    radioButtons.forEach((button, index) => {
        button.checked = index === currentSlideIndex; // Check the radio button corresponding to the current slide
    });
}

autoSlide(); // Start automatic slide

radioButtons.forEach((button, index) => {
    button.addEventListener('change', () => {
        clearInterval(intervalId); // Stop automatic slide when radio button is clicked
        restoreOriginalPosition();
        // Rotate the slider to the selected image
        while (currentSlideIndex !== index) {
            moveSlide();
        }
    });
});

// Optionally, handle window resizing to adjust image sizes
window.addEventListener('resize', () => {
    // Code to adjust slider width and height based on screen size
});



















