document.getElementById('calculate').addEventListener('click', function() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiency = parseFloat(document.getElementById('fuel-efficiency').value);
    const fuelPrice = parseFloat(document.getElementById('fuel-price').value);
    
    if (isNaN(distance) || isNaN(fuelEfficiency) || isNaN(fuelPrice)) {
        alert("Please fill in all fields with valid numbers.");
        return;
    }

    const totalCost = (distance * fuelEfficiency * fuelPrice).toFixed(2);
    
    document.getElementById('total-cost').innerText = totalCost;
    document.getElementById('result').classList.remove('hidden');
});
