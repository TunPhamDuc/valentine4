/* Moving NO Button */
function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.random() * 80 + "vh";
  elm.style.left = Math.random() * 80 + "vw";
}

const moveRandom = document.querySelector(".move-random");

if (moveRandom) {
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });
}

/* Floating Hearts Effect */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["❤️", "💖", "💕", "💗"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);



/* Background Music Control */
const music = document.getElementById("bgMusic");
let isPlaying = false;

// Autoplay after first interaction (browser-safe)
document.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.6;
    music.play();
    isPlaying = true;
  }
});

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}





