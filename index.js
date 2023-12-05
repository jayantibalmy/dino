const dino = document.querySelector(".dino");

//variable to track whether the dino is currently jumping
let isJumping = false;

// Function to handle the jump animation
function jump() {
    if (!isJumping) {
        isJumping = true;

        gsap.to(dino, {
            y: -70,
            duration: 0.4,
            onComplete: () => {
                gsap.to(dino, {
                    y: 0,
                    duration: 0.4,
                    onComplete: () => {
                        isJumping = false;
                    }
                });
            }
        });
    }
}

// Event listener to trigger the jump on a user click
window.addEventListener("click", jump);
