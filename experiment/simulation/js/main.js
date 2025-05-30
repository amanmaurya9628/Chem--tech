const simulateBtn = document.getElementById("simulateBtn");
const resultG = document.getElementById("result-G");
const ctxConductance = document
  .getElementById("conductanceChart")
  .getContext("2d");
const ctxInput = document.getElementById("inputChart").getContext("2d");
const currentDisplay = document.getElementById("input-current-display");
const voltageDisplay = document.getElementById("input-voltage-display");

let currentVal = 0;
let voltageVal = 0;
let experimentCount = 0;

const conductanceData = {
  labels: [],
  datasets: [
    {
      label: "Conductance (S)",
      data: [],
      borderColor: "#2ecc71",
      backgroundColor: "rgba(46, 204, 113, 0.2)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const conductanceChart = new Chart(ctxConductance, {
  type: "line",
  data: conductanceData,
  options: {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "Experiment #" } },
      y: { beginAtZero: true, title: { display: true, text: "G (S)" } },
    },
  },
});

const inputChart = new Chart(ctxInput, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Click to Set I (Y) & V (X)",
        data: [],
        backgroundColor: "#3498db",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: { min: 0, max: 5, title: { display: true, text: "Voltage (V)" } },
      y: { min: 0, max: 5, title: { display: true, text: "Current (A)" } },
    },
    onClick: (e) => {
      const points = inputChart.getElementsAtEventForMode(
        e,
        "nearest",
        { intersect: true },
        false
      );
      if (points.length === 0) {
        const canvasPosition = Chart.helpers.getRelativePosition(e, inputChart);
        const x = inputChart.scales.x.getValueForPixel(canvasPosition.x);
        const y = inputChart.scales.y.getValueForPixel(canvasPosition.y);
        currentVal = parseFloat(y.toFixed(2));
        voltageVal = parseFloat(x.toFixed(2));
        inputChart.data.datasets[0].data = [{ x: voltageVal, y: currentVal }];
        inputChart.update();
        currentDisplay.textContent = currentVal;
        voltageDisplay.textContent = voltageVal;
      }
    },
  },
});

simulateBtn.addEventListener("click", () => {
  if (voltageVal <= 0) {
    alert("Voltage must be greater than 0.");
    return;
  }
  const G = (currentVal / voltageVal).toFixed(4);
  experimentCount++;

  simulateBtn.disabled = true;
  document.getElementById("hand-current").style.display = "block";
  document.getElementById("hand-voltage").style.display = "block";

  setTimeout(() => {
    document.getElementById("hand-current").style.display = "none";
    document.getElementById("liquid-current").style.height =
      Math.min(currentVal * 50, 100) + "%";
  }, 1000);

  setTimeout(() => {
    document.getElementById("hand-voltage").style.display = "none";
    document.getElementById("liquid-voltage").style.height =
      Math.min(voltageVal * 50, 100) + "%";
  }, 2000);

  setTimeout(() => {
    document.getElementById("liquid-conductance").style.height =
      Math.min(G * 50, 100) + "%";
    resultG.textContent = `G: ${G} S`;
    conductanceChart.data.labels.push(experimentCount);
    conductanceChart.data.datasets[0].data.push(parseFloat(G));
    conductanceChart.update();
    simulateBtn.disabled = false;
  }, 3000);
});
