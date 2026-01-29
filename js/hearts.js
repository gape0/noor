// js/hearts.js

const colors = ["#ff5f8f", "#ffffff"]; // pink and white
const heartsCount = 30; // number of hearts floating at once

function createHeart() {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${window.innerHeight + 50}px`;
    heart.style.opacity = "0.5";
    heart.style.pointerEvents = "none"; // makes it unclickable
    heart.style.zIndex = "9999";
    heart.style.userSelect = "none";
    document.body.appendChild(heart);

    const speed = Math.random() * 2 + 1; // vertical speed
    const horizontalShift = Math.random() * 100 - 50; // sideways drift

    let top = window.innerHeight + 50;
    let left = parseFloat(heart.style.left);

    function animate() {
        top -= speed;
        left += horizontalShift * 0.002; // small horizontal drift
        heart.style.top = `${top}px`;
        heart.style.left = `${left}px`;

        if (top < -50) {
            document.body.removeChild(heart);
        } else {
            requestAnimationFrame(animate);
        }
    }
    animate();
}

// create multiple hearts every interval
setInterval(() => {
    for (let i = 0; i < 2; i++) createHeart();
}, 500);
