//Your JavaScript goes in here
    let voltageData = [];
    let conductanceData = [];
    const ctx = document.getElementById('conductanceChart').getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: voltageData,
        datasets: [{
          label: 'Conductance (S)',
          data: conductanceData,
          borderColor: 'blue',
          fill: false,
          tension: 0.2
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Voltage (V)' }},
          y: { title: { display: true, text: 'Conductance (S)' }}
        }
      }
    });

    function calculateConductance() {
      const V = parseFloat(document.getElementById('voltage').value);
      const I = parseFloat(document.getElementById('current').value);

      if (V === 0 || isNaN(V) || isNaN(I)) {
        document.getElementById('result').textContent = "Please enter valid, non-zero values.";
        return;
      }

      const G = I / V;
      document.getElementById('result').textContent = `Conductance: ${G.toFixed(4)} S`;

      voltageData.push(V.toFixed(2));
      conductanceData.push(G.toFixed(4));
      chart.update();
    }
