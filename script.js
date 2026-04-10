// ================= SOUNDS =================
function playClickSound() {
  const clickSound = document.getElementById("clickSound");
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});
  }
}

function playOpenSound() {
  const openSound = document.getElementById("openSound");
  if (openSound) {
    openSound.currentTime = 0;
    openSound.play().catch(() => {});
  }
}

// ================= PAGE SWITCH =================
function showPage(pageId) {
  playClickSound();

  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));

  const target = document.getElementById(pageId);
  if (target) target.classList.add("active");

  window.scrollTo(0, 0);
}

function openLetter(pageId) {
  playOpenSound();

  const pages = document.querySelectorAll(".page");
  pages.forEach(page => page.classList.remove("active"));

  const selected = document.getElementById(pageId);
  if (selected) {
    selected.classList.add("active");
    selected.style.animation = "none";
    selected.offsetHeight;
    selected.style.animation = "fadeIn 0.6s ease";
  }

  createBurstEffect();
  window.scrollTo(0, 0);
}

// ================= COUNTDOWN =================
let count = 5;

function startCountdown() {
  const countEl = document.getElementById("count");

  const timer = setInterval(() => {
    count--;

    if (countEl) countEl.textContent = count;

    if (count <= 0) {
      clearInterval(timer);

      createCakeEffect(); // small celebration 🎉

      setTimeout(() => {
        showPage("revealPage");
      }, 800);
    }
  }, 1000);
}

// Start countdown on load
window.addEventListener("load", startCountdown);

// ================= CAKE =================
function blowCandle() {
  playClickSound();

  document.getElementById("beforeBlow").classList.add("hidden");
  document.getElementById("afterBlow").classList.remove("hidden");

  createCakeEffect();
}

// ================= SPARKLE EFFECT =================
function createBurstEffect() {
  for (let i = 0; i < 10; i++) {
    const el = document.createElement("div");
    el.classList.add("sparkle");

    el.innerHTML = ["✨", "🌸", "⭐", "💖"][Math.floor(Math.random() * 4)];

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = Math.random() * window.innerHeight + "px";
    el.style.fontSize = (14 + Math.random() * 14) + "px";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1500);
  }
}

// ================= CONFETTI =================
function createCakeEffect() {
  for (let i = 0; i < 12; i++) {
    const el = document.createElement("div");
    el.classList.add("confetti");

    el.innerHTML = ["🎉", "✨", "🎂", "🌸"][Math.floor(Math.random() * 4)];

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = "-20px";
    el.style.fontSize = (14 + Math.random() * 14) + "px";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 2000);
  }
}

// ================= TOUCH BACKGROUND EFFECT =================
const colors = [
  "#ffe6f0",
  "#ffd6dd",
  "#fff0f5",
  "#ffe0eb",
  "#ffd1dc"
];

let colorIndex = 0;

document.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.background = colors[colorIndex];
});

// ================= BUTTON PRESS EFFECT =================
document.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
    }, 120);
  }
});