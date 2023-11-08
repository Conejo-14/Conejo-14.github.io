function CalculoFahren() {
    const numero = document.getElementById("temperatura");
    const Temp = parseFloat(numero.value);
    let result;

    if (!isNaN(Temp)) {
        const fahrenheit = (Temp * 9 / 5) + 32;
        result = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

    } else {
        result = "Ingrese una temperatura válida en grados Celsius.";

    }
    alert(result);

}
function CalculoKelvin() {
    const numero = document.getElementById("temperatura");
    const Temp = parseFloat(numero.value);
    let result;

    if (!isNaN(Temp)) {
        const Kelvin = Temp + 273.15;
        result = `Kelvin: ${Kelvin.toFixed(2)} °F`;

    } else {
        result = "Ingrese una temperatura válida en grados Celsius.";

    }
    alert(result);

}

function CalculoMillas() {
    const numero = document.getElementById("distancia");
    const Dis = parseFloat(numero.value);
    let result;

    if (!isNaN(Dis)) {
        const Millas = Dis / 1.609344;
        result = `Millas: ${Millas.toFixed(2)} °F`;

    } else {
        result = "Ingrese los kilometros.";

    }
    alert(result);

}
function CalculoMetros() {
    const numero = document.getElementById("distancia");
    const Dis = parseFloat(numero.value);
    let result;

    if (!isNaN(Dis)) {
        const Metros = Dis * 1000;
        result = `Metros: ${Metros.toFixed(2)} °F`;

    } else {
        result = "Ingrese los kilometros.";

    }
    alert(result);

}

function CalculoIMC() {
    const pesoInput = document.getElementById("peso");
    var alturaInput = document.getElementById("altura");
    let result;

    var peso = parseFloat(pesoInput.value);
    var altura = parseFloat(alturaInput.value);

    if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
        var imc = peso / (altura * altura);
        result = `Tu IMC es: ${imc.toFixed(2)}`;
    } else {
        result = "Ingrese un peso y una altura válidos (mayores que cero).";
    }
    alert(result);
}