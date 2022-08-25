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
export {marcarInputsError}