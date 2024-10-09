document.getElementById('consumptionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const power = document.getElementById('power').value;
    const hours = document.getElementById('hours').value;
    const days = document.getElementById('days').value;

    // Calculate consumption
    const consumption = (power * hours * days) / 1000; // kWh

    // Display result with animation
    const resultOutput = document.getElementById('consumptionOutput');
    resultOutput.innerText = `${consumption.toFixed(2)} kWh`;

    resultOutput.style.color = "#00ff00"; // Highlight in green
    resultOutput.style.transform = "scale(1.2)";
    setTimeout(() => {
        resultOutput.style.color = "#ffcc00"; // Return to default color
        resultOutput.style.transform = "scale(1)";
    }, 500);
});