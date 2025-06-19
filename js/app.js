console.log("App is running");

function insertDummyChart(containerId) {
  const chartDiv = document.getElementById(containerId);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "300");
  svg.innerHTML = `
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
      D3 Chart Here
    </text>`;
  chartDiv.appendChild(svg);
}

insertDummyChart("chart1");
insertDummyChart("chart2");