// js/hearts.js
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = Math.random() > 0.5 ? "🤍" : "💗";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 9000); // remove after animation
}, 500);
