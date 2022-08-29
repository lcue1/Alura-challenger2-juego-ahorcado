function dibujarCuadrado(pizarra,x1,y1,x2,y2) {
    console.log(pizarra);
    const pincel=pizarra.getContext("2d")
    pincel.fillStyle="#0A3871"
    pincel.fillRect(x1,y1,x2,y2)
}

function dibujarCirculo(pizarra,x,y,radio,inicioAngulo,finAngulo,bool,grozorLinea){
    console.log(pizarra);
    const pincel=pizarra.getContext("2d")
    pincel.strokeStyle="#0A3871"
    pincel.beginPath()
    pincel.arc(x, y, radio, inicioAngulo, finAngulo, bool); 
    pincel.lineWidth=grozorLinea
    pincel.stroke();
    
}

function dibujarLinea(pizarra,x,y,moveX,moveY) {
    const pincel=pizarra.getContext("2d")
    pincel.strokeStyle="#0A3871"
    pincel.moveTo(x,y)
    pincel.lineTo(moveX,moveY)
    pincel.lineWidth=2
    pincel.stroke()

}

export {dibujarCuadrado, dibujarCirculo,dibujarLinea}