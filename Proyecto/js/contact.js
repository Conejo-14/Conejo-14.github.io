$(window).on('scroll', function () {
    //efecto1
    //desvanece el eslogan conforme baja
    var scrolled = $(this).scrollTop();
    $('#contact').css({
        'transform': 'translate3d(0, ' + (scrolled * .20) + 'px,0)',
        'opacity': 1 - scrolled / 400
    });
})

function calcularEdad() {
    const fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    const fechaActual = new Date();

    const edadMilisegundos = fechaActual - fechaNacimiento;

    // Calcula la edad en años
    const edadAnios = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
    /*1000 milisegundos equivalen a 1 segundo.
    60 segundos equivalen a 1 minuto.
    60 minutos equivalen a 1 hora.
    24 horas equivalen a 1 día.
    365.25 días (para considerar años bisiestos) equivalen a 1 año.*/

    // Asigna la edad calculada al campo oculto
    document.getElementById("edad").value = edadAnios;
}