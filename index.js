// Function to rotate to landscape mode in phones 
function rotateToLandscapeMode() {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 600) {
        // Adjust the threshold (600 in this example) based on your needs
        document.body.classList.add('landscape');
    } else {
        document.body.classList.remove('landscape');
    }
}
// Rotate to landscape mode initially
rotateToLandscapeMode();

// Attach the function to the window resize event
window.addEventListener('resize', rotateToLandscapeMode);

const dino = document.querySelector(".dino");

//variable to track whether the dino is currently jumping
let isJumping = false;

// Function to handle the jump animation
function jump() {
    if (!isJumping) {
        isJumping = true;

        gsap.to(dino, {
            y: -70,
            duration: 0.3,
            onComplete: () => {
                gsap.to(dino, {
                    y: 0,
                    duration: 0.3,
                    onComplete: () => {
                        isJumping = false;
                    }
                });
            }
        });
    }
}

// Function to handle left move   
function leftMove() {
    const dinoX = dino.getBoundingClientRect().left; // Get dino's left position
    const viewportWidth = window.innerWidth; // Get viewport width
    const dinoCenter = viewportWidth / 2 - dino.offsetWidth / 2; // Calculate dino's center position

    if (dinoX > dinoCenter && dinoX > 20) { // Check if dino's left position is between center and minimum threshold
        gsap.to(dino, { x: '-=40' }); // Move left
    } else if (dinoX > 20) { // Check if dino's left position exceeds minimum threshold
        gsap.to(dino, { x: '-=40' }); // Move left
    }

}

// Function to handle right move
function rightMove() {
    const dinoX = dino.getBoundingClientRect().left; // Get dino's left position
    const dinoWidth = dino.offsetWidth; // Get dino's width
    if (dinoX + dinoWidth + 50 < window.innerWidth) {
        gsap.to(dino, { x: `+=40` }); // Move right by 30 pixels
    }
}

// Event listener to trigger the jump on a user click
window.addEventListener("click", jump);

// Event listener for the jump , leftMove , rightMove 
window.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.key === "ArrowUp") {
        jump();
    }
    else if (event.key === "ArrowLeft") {
        leftMove();
    }
    else if (event.key === "ArrowRight") {
        rightMove();
    }
});


const viewportHeight = window.innerHeight / 2;
const bottomPosition = viewportHeight;

function astFall() {
    gsap.to(".left-ast-1", { y: bottomPosition, x: 300, duration: 5, repeat: -1, delay: 2.5 })
    gsap.to(".left-ast-2", { y: bottomPosition, x: 0, duration: 7, repeat: -1 })
    gsap.to(".left-ast-3", { y: bottomPosition, x: 500, rotation: 3246, duration: 12, repeat: -1, delay: 3 })
    gsap.to(".left-ast-4", { y: bottomPosition, x: 200, duration: 8, repeat: -1, delay: 1.6 })
    gsap.to(".left-ast-5", { y: bottomPosition, x: 500, duration: 9, repeat: -1 })

    gsap.to(".right-ast-1", { y: bottomPosition, x: 0, duration: 4, repeat: -1, delay: 0.9 })
    gsap.to(".right-ast-2", { y: bottomPosition, x: -600, duration: 5, repeat: -1, delay: 2.2 })
    gsap.to(".right-ast-3", { y: bottomPosition, x: -300, rotation: 3246, duration: 13, repeat: -1, delay: 2 })
    gsap.to(".right-ast-4", { y: bottomPosition, x: -300, duration: 7, repeat: -1, delay: 1.6 })
    gsap.to(".right-ast-5", { y: bottomPosition, x: -300, duration: 6, repeat: -1, delay: 2 })
}

// const gameStart = true;
if (gameStart == true) {
    astFall();
}

function checkCollision(dino, asteroid) {
    const dinoRect = dino.getBoundingClientRect();
    const asteroidRect = asteroid.getBoundingClientRect();
    // Check for collision
    if (
        dinoRect.x < asteroidRect.x + asteroidRect.width &&
        dinoRect.x + dinoRect.width > asteroidRect.x &&
        dinoRect.y < asteroidRect.y + asteroidRect.height &&
        dinoRect.y + dinoRect.height > asteroidRect.y
    ) {
        // Collision detected
        handleCollision(); // Implement your collision behavior here
    }
}
// function handleCollision() {
//     // Implement the behavior when a collision occurs
//     console.log('Collision detected!');
//     // Add logic to end the game, reduce health, or trigger an animation
// }
// Example usage in your animation loop
// function gameLoop() {
//     // Get references to your dino and asteroids
//     const dino = document.querySelector('.dino');
//     const asteroid = document.querySelector('.ast-1'); // Change to your asteroid selector
//     // Check for collision in each frame
//     checkCollision(dino, asteroid);
//     // Continue with your game loop logic
//     // ...
//     requestAnimationFrame(gameLoop);
// }
// Call the game loop to start the collision detection
// gameLoop();