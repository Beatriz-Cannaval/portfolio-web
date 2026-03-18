const bg = document.querySelector(".background");

for (let i = 0; i < 60; i++) {
  const span = document.createElement("span");

  const size = Math.random() * 6 + 3;

  span.style.width = size + "px";
  span.style.height = size + "px";

  span.style.left = Math.random() * 100 + "vw";

  span.style.animationDuration = Math.random() * 20 + 10 + "s";
  span.style.animationDelay = Math.random() * 10 + "s";

  bg.appendChild(span);
}

const startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", () => {
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth"
  });
});
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});