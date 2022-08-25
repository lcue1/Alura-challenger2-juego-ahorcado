"use strict"
import { validarCadenas, inputVacio } from "./validaciones.js";
import { cargarPagina } from "./cargarPaginas.js";
import { marcarInputsError } from "./imformarAUsuario.js";
const d = document;

//div donde se cargan las diferentes interfaces
const cPrincipal = d.querySelector("#cPrincipal")
const palabrasAdivinanza=["FACEBOOK","TWITTER","TICKTOCK","ORACLE","APPLE","VKONTAKTE","GOOGLE","LINUX","WINDOWS","MAC"]

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
            let eR=/[ÁÉÍÍO1234567890\-.,_:;°!"#$%&/()=?¡ ¬|@·~½¬{\[\]}\\\¸]/
            if (
                validarCadenas(eR,valorMayusculasInput) !== -1 
                || inputVacio(inputNuevaPalabra)
                ) {
                    marcarInputsError(inputNuevaPalabra)
                return
            }

            cargarPagina("html/iniciarJuego.html")

        }



    })
}






/********************************** */

function validadorEventosTeclado() {
    d.addEventListener("keydown", function (e) {
        if (e.target.id === "inputNuevaPalabra") {

        }
    })
}
