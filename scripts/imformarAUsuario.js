const d=document
function marcarInputsError(elementoDOM) {
    let clist = elementoDOM.classList
    if(!clist.contains("valor-invalido")){
        clist.add("valor-invalido")
        let timer=setTimeout(() => {
            clist.remove("valor-invalido")
            inputNuevaPalabra.focus()
            clearTimeout(timer)
        }, 1000);
    }
   
}

function mensageGanastePerdiste(mensage,ganasteOPerdiste) {
    const pEtiqueta=d.createElement("p")
    pEtiqueta.innerHTML=mensage
    if(ganasteOPerdiste){
        pEtiqueta.classList.toggle("mensaje-ganaste")
    }else{
        pEtiqueta.classList.toggle("mensaje-perdiste")
    }
    return pEtiqueta
}
export {marcarInputsError, mensageGanastePerdiste}