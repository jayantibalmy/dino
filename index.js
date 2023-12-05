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
  
    if (dinoX > 20) { // Check if dino's left position exceeds viewport width
      gsap.to(dino, { x: '-=30' }); // Move left
    } else {
      // Dino is already at the leftmost position, prevent further movement
      gsap.to(dino, { x: 0 });
    }
  }
  
  // Function to handle right move 
  function rightMove() {
    const dinoX = dino.getBoundingClientRect().left; // Get dino's left position
    const viewportWidth = window.innerWidth - 20; // Get viewport width
  
    if (dinoX < viewportWidth - dino.offsetWidth) { // Check if dino's right position exceeds viewport width
      gsap.to(dino, { x: '+=30' }); // Move right
    } else {
      // Dino is already at the rightmost position, prevent further movement
      gsap.to(dino, { x: viewportWidth - dino.offsetWidth });
    }
  }
  


// Event listener to trigger the jump on a user click
window.addEventListener("click", jump);
// Event listener for space bar press
window.addEventListener("keydown", (event) => {
    if (event.code === "Space" || event.key === "ArrowUp") {
        jump();
    }
    else if (event.key === "ArrowLeft"){
        leftMove();
    }
    else if (event.key === "ArrowRight"){
        rightMove();
    }
});