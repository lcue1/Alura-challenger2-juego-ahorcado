"use strict"
import { validarCadenas, inputVacio } from "./validaciones.js";
import { obtenerPagina } from "./obtenerRecursos.js";
import { marcarInputsError, mensageGanastePerdiste } from "./imformarAUsuario.js";
import { teclasEspecialesPresionadas } from "./filtrar.js";
import { dibujarCirculo, dibujarLinea } from "./dibujarMuniecoAhorcado.js";
const d = document;

//div donde se cargan las diferentes interfaces
const cPrincipal = d.querySelector("#cPrincipal")
const palabrasAdivinanza = ["FACEBOOK", "TWITTER", "TICKTOCK", "ORACLE", "APPLE", "GOOGLE", "LINUX", "WINDOWS", "MAC"]

//Solo letras de A-Z
const eR = /[ÁÉÍÍÓ1234567890\-.<>,_:;°!"#$%&/()=?¿'¡ *´+¨^`¬|@·~½¬{\[\]}\\\¸]/
let interfazCargada = "inicio"
window.onload = function () {
    obtenerPagina("./html/inicio.html", cargarContenido)
    // console.log(cargarPagina("../html/inicio.html"));
    controladorEventosclick();


}

function controladorEventosclick() {

    d.addEventListener("click", function (e) {
        //console.log(e.target);
        if (e.target.id === "btnIniciar") {
            obtenerPagina("./html/jugar.html", cargarJuego)

        }

        if (e.target.id === "btnNuevaPalabra") {
            obtenerPagina("./html/nuevaPalabra.html", cargarContenido)


        }

        if (e.target.id === "btnCancelar") {
            obtenerPagina("./html/inicio.html", cargarContenido)
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
            obtenerPagina("./html/jugar.html", cargarJuego)

        }
    })
}






/********************************** */
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
let pizarra =null
let main=null
let palabraCorrcta=null
function cargarJuego(contenidoHtml) {
    caracteresAcertados=[]
    cPrincipal.innerHTML = contenidoHtml
    intentos=0
    pizarra=d.getElementById("pizarra")
    palabraCorrcta=sortearPalabra()
    palabraSorteada = Array.from(palabraCorrcta)
    pizarra=document.getElementById("pizarra")
    main =d.querySelector("main")
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
        dibujarErrores(intentos)
    }
    if(intentos==10){
        d.removeEventListener("keydown",jugando)
        main.appendChild(mensageGanastePerdiste("Perdiste! la palabra era "+palabraCorrcta,false))

    }
    let ganaste=palabraSorteada.filter(v=>v!=="")
    if(ganaste.length===0){
        d.removeEventListener("keydown",jugando)
        main.appendChild(mensageGanastePerdiste("Felicidades! Haz logrado encontrar la palabra oculta",true))
    }
    


}
function dibujarErrores(intentos) {
    const grozorLinea=1.5
    if(intentos===1)dibujarLinea(pizarra,100,145,200,145)
    if(intentos===2)dibujarLinea(pizarra,125,10,125,145)
    if(intentos===3)dibujarLinea(pizarra,125,10,175,10)
    if(intentos===4)dibujarLinea(pizarra,175,10,175,25)
    if(intentos===5)dibujarCirculo(pizarra,175, 35, 10, 0, Math.PI * 2, true,grozorLinea)
    if(intentos===6)dibujarLinea(pizarra,175,45,175,100)//cuerpo
    if(intentos===7)dibujarLinea(pizarra,175,50,150,75)// b derecho
    if(intentos===8)dibujarLinea(pizarra,175,50,200,75)// b izquierdo
    if(intentos===9)dibujarLinea(pizarra,175,100,150,125)// p derecho
    if(intentos===10)dibujarLinea(pizarra,175,100,200,125)// p izquierdo

}
