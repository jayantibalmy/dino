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
        gsap.to(dino, { x: '-=30' }); // Move left
    } else if (dinoX > 20) { // Check if dino's left position exceeds minimum threshold
        gsap.to(dino, { x: '-=30' }); // Move left
    }

}

// Function to handle right move
function rightMove() {
    const dinoX = dino.getBoundingClientRect().left; // Get dino's left position
    const dinoWidth = dino.offsetWidth; // Get dino's width
    if (dinoX + dinoWidth + 30 < window.innerWidth) {
        gsap.to(dino, { x: `+=30` }); // Move right by 30 pixels
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