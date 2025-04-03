function updateSelectedInfo() {
    const agent = document.getElementById('agent').value;
    const week = document.getElementById('week').value;
    document.getElementById('selected-info').textContent = `Selected Agent: ${agent} | Selected Week: ${week}`;
}

const ctx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['03-Mar', '10-Mar', '17-Mar', '24-Mar'],
        datasets: [
            { label: 'Sports', data: [0.2, 0.5, -0.3, 0.8], borderColor: 'red', fill: false },
            { label: 'Sports (live)', data: [0.1, -0.2, 0.4, 0.6], borderColor: 'blue', fill: false },
            { label: 'Casino', data: [-0.5, 0.3, 0.2, 0.7], borderColor: 'green', fill: false },
            { label: 'Horses', data: [0.4, -0.1, 0.6, 0.3], borderColor: 'orange', fill: false }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: -1,
                max: 1,
                ticks: { stepSize: 0.5 }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});