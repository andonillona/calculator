document.querySelector('button').addEventListener('click', () => {
    const km      = document.querySelector('#kilometros').value,
          precio  = document.querySelector('#precio-gasolina').value,
          carBike = document.getElementsByName("vehiculo");
    let rendimientoFinal = 0;

    for (let i=0; i < carBike.length; i++) {

        if (carBike[0].checked == true) {
            let rendimiento = 6.9;
            rendimientoFinal = rendimiento;
        } else {
             let rendimiento = 5;
             rendimientoFinal = rendimiento;}
    }

// Calculos 

    const litros = ( rendimientoFinal * km ) / 100;
    let resultado = litros * precio;
    resultado = resultado.toFixed(2);
    alert(resultado + ' €');
})