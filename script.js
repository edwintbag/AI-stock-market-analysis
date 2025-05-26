

script.js const toggleBtn = document.getElementById('theme-toggle'); const themeIcon = document.getElementById('theme-icon');

function updateIcon() { const isDark = document.documentElement.classList.contains('dark'); themeIcon.textContent = isDark ? '☀️' : '🌙'; }

toggleBtn.addEventListener('click', () => { document.documentElement.classList.toggle('dark'); updateIcon(); });

updateIcon();

script.js const ctx = document.getElementById('priceChart'); const priceChart = new Chart(ctx, { type: 'line', data: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], datasets: [{ label: 'Stock Price', data: [150, 160, 155, 170, 165], fill: false, borderColor: 'rgb(75, 192, 192)', tension: 0.1 }] }, options: { responsive: true, plugins: { legend: { labels: { color: '#000' } } }, scales: { x: { ticks: { color: '#555' }, grid: { color: '#eee' } }, y: { ticks: { color: '#555' }, grid: { color: '#eee' } } } } });

