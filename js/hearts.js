// js/hearts.js
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = Math.random() > 0.5 ? "🤍" : "💗";
  
  // Random horizontal start
  h.style.left = Math.random() * 100 + "vw";
  
  // Random font size for variation
  const size = 16 + Math.random() * 12; // 16px to 28px
  h.style.fontSize = size + "px";
  
  // Random horizontal drift animation
  const drift = Math.random() * 50 - 25; // -25px to +25px
  h.style.setProperty('--drift', drift + 'px');

  document.body.appendChild(h);

  // Remove after animation
  setTimeout(() => h.remove(), 9000);
}, 300);
