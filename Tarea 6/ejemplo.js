function filtrarElementos() {
    var input = document.getElementById("busquedaInput");
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("listaElementos");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        var textoElemento = li[i].textContent || li[i].innerText;
        if (textoElemento.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

    