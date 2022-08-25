
function cargarPagina(nombrePagina) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cPrincipal.innerHTML = xhttp.responseText
        }
    };
    xhttp.open("GET", nombrePagina, true);
    xhttp.send();
}
export {cargarPagina}