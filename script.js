// ---- Background music — plays when Yes is clicked ----
const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.2;
bgMusic.load();

// Yes → open popover + start music
document.getElementById('yesBtn').addEventListener('click', () => {
  document.getElementById('overlay').classList.add('open');
  bgMusic.play().catch(() => {});
});

// Click outside popover to close
document.getElementById('overlay').addEventListener('click', (e) => {
  if (e.target === document.getElementById('overlay')) {
    document.getElementById('overlay').classList.remove('open');
  }
});


// No button runs away on hover
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth  - noBtn.offsetWidth  - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  noBtn.style.position = 'fixed';
  noBtn.style.left = Math.random() * maxX + 'px';
  noBtn.style.top  = Math.random() * maxY + 'px';
  noBtn.style.zIndex = '50';
});

// ---- Glitter sparkles around Yes button (mobile only) ----
const GLITTER_COLORS = [
  '#FFD700', '#FFC84B', '#FFE566', '#FFBC2E', '#FFF0A0', '#FFD97D',
];

const GLITTER_SYMBOLS = ['𓈒', '⟡', '₊', '⋆', '∘', '˚', '⊹'];

function spawnSparkle() {
  if (window.innerWidth > 600) return;

  const btn = document.getElementById('yesBtn');
  const rect = btn.getBoundingClientRect();

  const s = document.createElement('span');
  s.classList.add('sparkle');
  s.textContent = GLITTER_SYMBOLS[Math.floor(Math.random() * GLITTER_SYMBOLS.length)];

  const size = 6 + Math.random() * 8;
  s.style.fontSize = size + 'px';

  const x = rect.left + Math.random() * (rect.width + 20) - 10;
  const y = rect.top  + Math.random() * (rect.height + 20) - 10;
  s.style.left = x + 'px';
  s.style.top  = y + 'px';

  s.style.color = GLITTER_COLORS[Math.floor(Math.random() * GLITTER_COLORS.length)];

  const dx = (Math.random() - 0.5) * 18;
  const dy = -(15 + Math.random() * 25);
  s.style.setProperty('--dx', dx + 'px');
  s.style.setProperty('--dy', dy + 'px');

  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1400);
}

setInterval(spawnSparkle, 220);
