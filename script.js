let chart = null;
let drawChart = () => {
  const ctx = document.getElementById('cchart');
  const context = ctx.getContext('2d');
  context.clearRect(0, 0, ctx.width, ctx.height);
  if (chart) chart.destroy();

  Chart.defaults.font.size = 20;
  Chart.defaults.font.family = "'Courier New', Courier, monospace";
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
      datasets: [
        {
          data: [1, 3, 1.5, 6, 2, 3],
          borderColor: 'red',
          fill: false,
          label: 'Transaction Fees',
        },
        {
          data: [1, 1, 1, 1, 1, 1],
          borderColor: 'blue',
          fill: false,
          label: 'TK-Battery',
        },
      ],
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'easeInBounce',
          from: 0.25,
          to: 0,
          loop: false,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            color: 'black',
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.25)',
          },
        },
        y: {
          suggestedMin: 0,
          suggestedMax: 6,
          ticks: {
            color: 'black',
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
  });
};

drawChart();
window.onresize = () => {
  drawChart();
};
