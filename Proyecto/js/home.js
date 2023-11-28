function galeria(){
    window.location.href="gallery.html";/*redirecciona la pagina a la galeria*/
}

/*$(window).on('scroll',function(){
    //efecto1
    //desvanece el eslogan conforme baja
    var scrolled = $(this).scrollTop();
    $('#eslogan').css({
      'transform':'translate3d(0, ' + (scrolled * .20) + 'px,0)',
      'opacity':1 - scrolled / 400
    });
});*/

$(document).ready(function(){
    $("#botonG").hover(
        function() {
            // Cuando el mouse entra en el botón
            $(this).css("box-shadow", "0 0 10px #888");
        },
        function() {
            // Cuando el mouse sale del botón
            $(this).css("box-shadow", "none");
        }
    );
});
$(document).ready(function(){
    $("#suscribeBnt").hover(
        function() {
            // Cuando el mouse entra en el botón
            $(this).css("box-shadow", "0 0 10px #888");
        },
        function() {
            // Cuando el mouse sale del botón
            $(this).css("box-shadow", "none");
        }
    );
});

