function obtenerPagina(rutaPagina,f) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            f(xhttp.responseText)
            
        }
    };
    xhttp.open("GET", rutaPagina, true);
    xhttp.setRequestHeader("Content-type","text/html; charset=utf-8")
    xhttp.send();
    return xhttp
}
export {obtenerPagina}