var txtConstruccion;
var txtTerreno;

function tipoCambio() {
    txtConstruccion = document.getElementsByName("txtConstru")[0].value;
    let calculo = txtConstruccion * 500;
    if (document.getElementsByName('chkAcabado')[0].checked) {
        calculo = calculo * 1.20;

    }
    calculo = calculo * 534.78;

    return calculo;
}

function metroTerreno() {

    var metrosTerreno = parseFloat(document.getElementsByName("txtTerreno")[0].value);
    var precio;
    var ubicacion = document.querySelector('input[name="ubicacion"]:checked').value;
    if (ubicacion === "Rural") {
        precio = metrosTerreno * 50000;
    }
    if (ubicacion === "Urbano") {
        precio = metrosTerreno * 120000;
    }
    return precio;
}
function calculoBanos() {

    var banos = parseInt(document.getElementsByName("numBanos")[0].value) * 1000000;
    return banos;

}

function calculoCochera() {
    var carros;
    var valor;
    if (document.getElementsByName("chkCochera")[0].checked) {
        carros = parseInt(document.getElementsByName("numCarros")[0].value);
        if (carros == 1) {
            valor = 1300000;
        }
        if (carros == 2) {
            valor = 2000000;
        }
        if (carros == 3) {
            valor = 2500000;
        }
    }
    return valor;
}

function calculoExtra() {
    var valor = 0;
    if (document.getElementsByName("chkBalcon")[0].checked) {
        valor += 1200000;
    }
    if (document.getElementsByName("chkPiscina")[0].checked) {
        valor += 10000000;
    }
    if (document.getElementsByName("chkParrilla")[0].checked) {
        valor += 1000000;
    }
    if (document.getElementsByName("chkTerraza")[0].checked) {
        valor += 2500000;
    }
    return valor;

}
function formatNumber(number, decimals = 2, thousandsSeparator = ',', decimalSeparator = '.') {
    return number.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator).replace('.', decimalSeparator);
}
function Total() {
    var total = tipoCambio() + metroTerreno() + calculoBanos() + calculoCochera() + calculoExtra();
    return total;
}

function aplica() {
    var porcionTotal = Total() * 0.25;
    var prima = parseFloat(document.getElementsByName("txtPrima")[0].value);
    var aprobado;
    if (prima >= porcionTotal) {
        aprobado = "Aplica el Financiamiento";

    }
    else {
        aprobado = "No aplica el financiamiento";
    }
    var formattedNumber = formatNumber(Total(), 2, ',', '.');
    document.getElementById("cotizacion").innerText = "Monto total de la casa: " + "₡ " + formattedNumber + "\n"
        + "Aplica el finaciamiento: " + aprobado;
    return aprobado;
}

function proyeccion()
{
    var table = document.createElement('table');
    
    htmlTabla = "<caption>Desgloce</caption>";
    htmlTabla += "<tr>";
    htmlTabla += "<th>Monto del terreno</th>";
    htmlTabla += "<th>Monto por la cantidad de baños</th>";
    htmlTabla += "<th>Monto de la cochera</th>";
    htmlTabla += "<th>Montos de extras</th>";
    htmlTabla += "<th>Monto de construcción (con/sin acabado de lujo)</th>";
    htmlTabla += "<th>Monto Total de la cotización de la casa </th>";
    htmlTabla += "</tr>";


    if (aplica() == "Aplica el Financiamiento") {

        htmlTabla += "<tr>";
        htmlTabla += "<td>" + "₡ " + formatNumber(metroTerreno(), 2, ',', '.') + "</td>";
        htmlTabla += "<td>" + "₡ " + formatNumber(calculoBanos(), 2, ',', '.') + "</td>";
        htmlTabla += "<td>" + "₡ " + formatNumber(calculoCochera(), 2, ',', '.')+ "</td>";
        htmlTabla += "<td>" + "₡ " + formatNumber(calculoExtra(), 2, ',', '.') + "</td>";
        htmlTabla += "<td>" + "₡ " + formatNumber(tipoCambio(), 2, ',', '.') + "</td>";
        htmlTabla += "<td>" + "₡ " + formatNumber(Total(), 2, ',', '.') + "</td>";
        htmlTabla += "</tr>";
    }
    else {
        document.getElementById("desgloce").innerText = "No hay desgloce porque la cotización de la casa no fue aprobada" + "\n";
    }
    
    table.innerHTML = htmlTabla;

    var div = document.getElementById('tblData');
    div.appendChild(table);

}













