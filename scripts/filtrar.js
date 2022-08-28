const teclasEspeciales = [
    "Tab",
    "Escape",
    "CapsLock",
    "ShiftLeft",
    "ControlLeft",
    "AltLeft",
    "AltRight",
    "ContextMenu",
    "ControlRight",
    "ShiftRight",
    "Enter",
    "Backspace",
    "NumpadEnter",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Insert",
    "Delete",
    "Home",
    "End",
    "PageDown",
    "PageUp",
    "NumLock",
    "Control"
]

function teclasEspecialesPresionadas(teclaPreSionada) {
    return teclasEspeciales.indexOf(teclaPreSionada)!==-1
    ?true:false
}


export{teclasEspecialesPresionadas}