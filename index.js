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
function leftMove (){
    gsap.to(dino,{x:'-=30'})
}
// Function to handle right move 
function rightMove (){
    gsap.to(dino,{x:'+=30'})
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