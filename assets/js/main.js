const track = document.getElementById("track");

let currentX = 0;

window.addEventListener("wheel", (e) => {
  e.preventDefault();

  const speed = 1.5;
  currentX += e.deltaY * speed;

  const maxScroll = track.scrollWidth - window.innerWidth;

  currentX = Math.max(0, Math.min(currentX, maxScroll));

  track.style.transform = `translate3d(-${currentX}px, 0, 0)`;
}, { passive: false });