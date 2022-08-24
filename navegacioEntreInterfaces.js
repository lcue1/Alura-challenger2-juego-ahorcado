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
            cargarPagina("html/iniciarJuego.html")

          
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

function validadorEventosTeclado() {
    d.addEventListener("keyup",function (e) {
        if(e.target.id==="inputNuevaPalabra"){
            const inputNuevaPalabra = document.querySelector("#inputNuevaPalabra")
            if(inputNuevaPalabra.value.length>8){
                let maximoPermitido=inputNuevaPalabra.value
                inputNuevaPalabra.value=maximoPermitido.substring(0,8)
            }
        }
    })
}


function validarNumeroLetras(input, n) {
    if (input.value.lenght > n) {
        input.value
    }
}