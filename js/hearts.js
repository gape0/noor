function createHearts(count = 50) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';
    heart.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(heart);
  }
}
window.onload = () => createHearts();
