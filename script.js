
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
            { label: 'Sports (live)', data: [0.1, 0.4, -0.1, 0.7], borderColor: 'green', fill: false },
            { label: 'Casino', data: [-0.1, 0.1, 0.0, 0.2], borderColor: 'blue', fill: false },
            { label: 'Games', data: [0.3, -0.2, 0.4, 0.1], borderColor: 'yellow', fill: false },
        ]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});

document.getElementById('toggle-chart').addEventListener('click', function () {
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer.style.display === "none" || chartContainer.style.display === "") {
        chartContainer.style.display = "block";
    } else {
        chartContainer.style.display = "none";
    }
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}