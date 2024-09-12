document.getElementById('calculate').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const distance = parseFloat(document.getElementById('distance').value);
    const fuelEfficiencyPer100Km = parseFloat(document.getElementById('fuel-efficiency').value);
    const fuelPrice = parseFloat(document.getElementById('fuel-price').value);

    // Verificar que todos los valores sean válidos
    if (isNaN(distance) || isNaN(fuelEfficiencyPer100Km) || isNaN(fuelPrice) || distance <= 0 || fuelEfficiencyPer100Km <= 0 || fuelPrice <= 0) {
        alert('Por favor ingrese valores válidos');
        return;
    }

    // Convertir eficiencia de L/100km a L/km
    const fuelEfficiencyPerKm = fuelEfficiencyPer100Km / 100;

    // Calcular el costo total del combustible
    const totalCost = distance * fuelEfficiencyPerKm * fuelPrice;

    // Mostrar el resultado
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
});
