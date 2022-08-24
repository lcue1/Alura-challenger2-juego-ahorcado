"use strict"

const d = document;

//div donde se cargan las diferentes interfaces
const cPrincipal = d.querySelector("#cPrincipal")

window.onload = function () {
    cargarPagina("html/inicio.html")
    controladorEventosclick();
    validadorEventosTeclado();


}

function controladorEventosclick() {
    d.addEventListener("click", function (e) {
        //console.log(e.target);
        if (e.target.id === "btnIniciar") {
            cargarPagina("html/iniciarJuego.html")
        }

        if (e.target.id === "btnNuevaPalabra") {
            cargarPagina("html/nuevaPalabra.html")

        }

        if (e.target.id === "btnCancelar") {
            cargarPagina("html/inicio.html")
        }

        if (e.target.id === "btnGuardarYEmpezar") {

            let inputNuevaPalabra = document.querySelector("#inputNuevaPalabra")
            let valorMayusculasInput = inputNuevaPalabra.value.toUpperCase()
            let vaalidacion = validarCadenas(//no acentos y caracteres especiales
                /[ÁÉÍÍO\-.,_:;°!"#$%&/()=?¡ ¬|@·~½¬{\[\]}\\\¸]/,
                valorMayusculasInput
            )
            if (vaalidacion !== -1) {
                alertarAlUsuario(inputNuevaPalabra)
                return
            }

            console.log(1111);
            //  cargarPagina("html/iniciarJuego.html")

        }



    })
}

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

function validarCadenas(rE, string) {
    return string.search(rE)
}

function alertarAlUsuario(elementoDOM) {
    let clist=elementoDOM.classList
    clist.add("valor-invalido")
    console.log(clist);
    setTimeout(() => {
        clist.remove("valor-invalido")
        inputNuevaPalabra.focus()

    }, 2000);
}

/********************************** */

function validadorEventosTeclado() {
    d.addEventListener("keydown", function (e) {
        if (e.target.id === "inputNuevaPalabra") {

        }
    })
}

function validarNumeroLetras(input, n) {
    if (input.value.lenght > n) {
        input.value
    }
}
