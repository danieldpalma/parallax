const speeds = [];
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function parallax(event) {
  const layers = this.querySelectorAll('.layer');
  layers.forEach((layer, index) => {
    speeds[index] = speeds[index] || rand(-6, 6) || layer.dataset.speed;
    const x = (window.innerWidth - event.pageX * speeds[index]) / 100;
    const y = (window.innerHeight - event.pageY * speeds[index]) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.addEventListener('mousemove', parallax);
