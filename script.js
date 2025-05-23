Dark / Light theme toggle const toggleBtn = document.getElementById('theme-toggle'); const themeIcon = document.getElementById('theme-icon');

function updateIcon() { const isDark = document.documentElement.classList.contains('dark'); themeIcon.textContent = isDark ? '☀️' : '🌙'; }

toggleBtn.addEventListener('click', () => { document.documentElement.classList.toggle('dark'); updateIcon(); });

updateIcon();

Placeholder for chart initialization // In future, integrate Chart.js or D3 to render into each card const cards = document.querySelectorAll('.card'); cards.forEach(card => { const type = card.dataset.type; const container = card.querySelector('div'); container.textContent = Ready for ${type} chart; });

