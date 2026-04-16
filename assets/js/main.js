const track = document.getElementById("track");

let currentX = 0;
let startX = 0;
let isTouching = false;

/* DESKTOP (Mouse Wheel) */
window.addEventListener("wheel", (e) => {
  e.preventDefault();

  const speed = 1.5;
  currentX += e.deltaY * speed;

  updateScroll();
}, { passive: false });

/* MOBILE (Touch) */
window.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isTouching = true;
});

window.addEventListener("touchmove", (e) => {
  if (!isTouching) return;

  const touchX = e.touches[0].clientX;
  const delta = startX - touchX;

  currentX += delta * 1.5;
  startX = touchX;

  updateScroll();
});

window.addEventListener("touchend", () => {
  isTouching = false;
});

/* COMMON FUNCTION */
function updateScroll() {
  const maxScroll = track.scrollWidth - window.innerWidth;

  currentX = Math.max(0, Math.min(currentX, maxScroll));

  track.style.transform = `translate3d(-${currentX}px, 0, 0)`;
}