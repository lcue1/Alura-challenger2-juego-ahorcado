
function validarCadenas(rE, string) {
    return string.search(rE)
}
function inputVacio(input) {
    if(input.value==="")return true
    return false
}

export {validarCadenas,inputVacio}