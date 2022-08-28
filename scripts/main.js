"use strict"
import { validarCadenas, inputVacio } from "./validaciones.js";
import { obtenerPagina } from "./obtenerRecursos.js";
import { marcarInputsError } from "./imformarAUsuario.js";
import { teclasEspecialesPresionadas } from "./filtrar.js";
const d = document;

//div donde se cargan las diferentes interfaces
const cPrincipal = d.querySelector("#cPrincipal")
//const palabrasAdivinanza = ["FACEBOOK", "TWITTER", "TICKTOCK", "ORACLE", "APPLE", "VKONTAKTE", "GOOGLE", "LINUX", "WINDOWS", "MAC"]
const palabrasAdivinanza = ["ASSAD", "TWITTER"]

//Solo letras de A-Z
const eR = /[ÁÉÍÍO1234567890\-.<>,_:;°!"#$%&/()=?¿'¡ *´+¨^`¬|@·~½¬{\[\]}\\\¸]/
let interfazCargada = "inicio"
window.onload = function () {
    /**Esto va cuando el juego empiece*/



    /************************************************* */
    obtenerPagina("../html/inicio.html", cargarContenido)
    // console.log(cargarPagina("../html/inicio.html"));
    controladorEventosclick();


}

let cnacelarJuego = false
function controladorEventosclick() {

    d.addEventListener("click", function (e) {
        //console.log(e.target);
        if (e.target.id === "btnIniciar") {
            obtenerPagina("../html/jugar.html", cargarJuego)

        }

        if (e.target.id === "btnNuevaPalabra") {
            obtenerPagina("../html/nuevaPalabra.html", cargarContenido)


        }

        if (e.target.id === "btnCancelar") {
            obtenerPagina("../html/inicio.html", cargarContenido)
            d.removeEventListener("keydown", jugando)
        }

        if (e.target.id === "btnGuardarYEmpezar") {

            let inputNuevaPalabra = document.querySelector("#inputNuevaPalabra")
            let valorMayusculasInput = inputNuevaPalabra.value.toUpperCase()
            if (
                validarCadenas(eR, valorMayusculasInput) !== -1
                || inputVacio(inputNuevaPalabra)
            ) {
                marcarInputsError(inputNuevaPalabra)
                return
            }
            palabrasAdivinanza.push(valorMayusculasInput)
            obtenerPagina("../html/jugar.html", cargarJuego)

            // cargarPagina(cPrincipal,"../html/jugar.html")
            //  insertarEspacionLetrasAAdivinar(sortearPalabra())

        }
    })
}






/********************************** */
function jugando(e) {

    if (validarCadenas(eR, e.key) !== -1 || inputVacio(e.key)) return
    let caracterTipeado = e.key.toUpperCase()
    if (teclasEspecialesPresionadas(e.code)) return
    let indice = palabraSorteada.indexOf(caracterTipeado)

    if(indice!==-1){
        if(caracteresAcertados[indice].innerHTML!==caracterTipeado){
            caracteresAcertados[indice].innerHTML=caracterTipeado
            palabraSorteada[indice]=""
        }
    }else{
        let cLetrasIncorrectas=d.getElementById("cLetrasIncorrectas")
        if(!cLetrasIncorrectas.innerHTML.includes(caracterTipeado)){
            cLetrasIncorrectas .innerHTML+=caracterTipeado+" "
        }
        intentos++
    }
    if(intentos==10){
        d.removeEventListener("keydown",jugando)
        console.log("perdiste");
    }
    let ganaste=palabraSorteada.filter(v=>v!=="")
    if(ganaste.length===0){
        d.removeEventListener("keydown",jugando)
        console.log("Ganaste");

    }

}
function sortearPalabra() {
    let nAleatorio = Math.round(Math.random() * palabrasAdivinanza.length)
    if (nAleatorio === palabrasAdivinanza.length) nAleatorio -= 1
    return palabrasAdivinanza[nAleatorio]

}



function cargarContenido(contenido) {
    cPrincipal.innerHTML = contenido

}
let palabraSorteada
let caracteresAcertados=[]
let intentos=0
function cargarJuego(contenidoHtml) {
    caracteresAcertados=[]
    cPrincipal.innerHTML = contenidoHtml
    intentos=0
    palabraSorteada = Array.from(sortearPalabra())
    console.log(palabraSorteada, "SORTEADA");
    let fragmento = document.createDocumentFragment()

    for (let i = 0; i < palabraSorteada.length; i++) {
        let etiquetaSpan = document.createElement("span");
        etiquetaSpan.innerHTML = "&nbsp&nbsp"
        fragmento.appendChild(etiquetaSpan)
        caracteresAcertados[i]=etiquetaSpan
    }
    d.getElementById("cLetrasAdivinar").appendChild(fragmento)
    d.addEventListener("keydown", jugando)
}

