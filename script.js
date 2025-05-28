
const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function updateIcon() {
  const isDark = document.documentElement.classList.contains('dark');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  updateIcon();
});

updateIcon();



const ctx = document.getElementById('priceChart');
const priceChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Stock Price',
      data: [150, 160, 155, 170, 165],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#000' } }
    },
    scales: {
      x: {
        ticks: { color: '#555' },
        grid: { color: '#eee' }
      },
      y: {
        ticks: { color: '#555' },
        grid: { color: '#eee' }
      }
    }
  }
});



const heatmapCtx = document.getElementById('volumeHeatmap');
const volumeHeatmap = new Chart(heatmapCtx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Trading Volume',
      data: [20000, 35000, 18000, 40000, 25000],
      backgroundColor: function(context) {
        const value = context.raw;
        if (value > 35000) return '#dc2626'; // High volume = red
        if (value > 25000) return '#f59e0b'; // Medium = orange
        return '#10b981'; // Low = green
      }
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#555' },
        grid: { color: '#eee' }
      },
      y: {
        ticks: { color: '#555' },
        grid: { color: '#eee' }
      }
    }
  }
});




const sentimentCtx = document.createElement('canvas');
sentimentCtx.id = 'sentimentChart';
document.querySelector('[data-type="bar"]').appendChild(sentimentCtx);

// Example sentiment data
const sentimentData = {
  labels: ['Positive', 'Neutral', 'Negative'],
  datasets: [{
    label: 'Sentiment Score',
    data: [65, 20, 15],
    backgroundColor: [
      'rgba(34, 197, 94, 0.7)',   // green
      'rgba(251, 191, 36, 0.7)',  // yellow
      'rgba(239, 68, 68, 0.7)'    // red
    ],
    borderColor: [
      'rgba(34, 197, 94, 1)',
      'rgba(251, 191, 36, 1)',
      'rgba(239, 68, 68, 1)'
    ],
    borderWidth: 1
  }]
};

new Chart(sentimentCtx, {
  type: 'bar',
  data: sentimentData,
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#888' },
        grid: { display: false }
      },
      y: {
        ticks: { color: '#888' },
        grid: { color: '#eee' }
      }
    }
  }
});
