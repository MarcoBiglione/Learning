var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var estado;
var colorcito = "red";
var x;
var y;
var grosorLapizDibujo = 2;

document.addEventListener("mousemove", moverMouse);

var botonGrosorLapiz = document.getElementById("botonGrosor");
botonGrosorLapiz.addEventListener("click",grosorLapiz);

var botonWidthHeight = document.getElementById("botonMedidas");
botonWidthHeight.addEventListener("click", medidasCanvas);

var colorAmarillo =document.getElementById("botonAmarillo");
var colorRojo =document.getElementById("botonRojo");
var colorAzul =document.getElementById("botonAzul");
var colorVerde =document.getElementById("botonVerde");
var colorNegro =document.getElementById("botonNegro");

colorAmarillo.addEventListener("click" ,color_amarillo);
colorRojo.addEventListener("click" ,color_rojo);
colorAzul.addEventListener("click" ,color_azul);
colorVerde.addEventListener("click" ,color_verde);
colorNegro.addEventListener("click" ,color_negro);

function grosorLapiz()
{
  var numeroGrosor =document.getElementById("grosorLapiz");
  grosorLapizDibujo = parseInt(numeroGrosor.value);
}

function color_amarillo()
{
  colorcito = "yellow";
}

function color_rojo()
{
  colorcito = "red";
}

function color_azul()
{
  colorcito = "blue";
}

function color_verde()
{
  colorcito = "green";
}

function color_negro()
{
  colorcito = "black";
}

function medidasCanvas()
{
  var anchoCanvas = document.getElementById("widthCanvas");
  var altoCanvas = document.getElementById("heightCanvas");

  cuadrito.width = parseInt(anchoCanvas.value);
  cuadrito.height = parseInt(altoCanvas.value);

  var ancho = cuadrito.width;
  var alto = cuadrito.height;

}

dibujarLinea(colorcito, grosorLapizDibujo, x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, grosorLapizDibujo, x_inicial, y_inicial, x_final, y_final, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= grosorLapizDibujo;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final)
    lienzo.stroke();
    lienzo.closePath();
  }
function moverMouse(evento)
  {
    x = evento.layerX -1;
    y = evento.layerY -1;
    console.log(evento)
    if(evento.buttons == 1)
     {
       dibujarLinea(colorcito, grosorLapizDibujo, x, y, evento.layerX, evento.layerY, papel);
     }
     else
     {
       x = evento.layerX;
       y = evento.layerY;
     }
  }
  function soltarClick(evento)
  {
   estado = 0;
  }

function dibujarTeclado(evento)
{
  movimiento = 10;
  switch(evento.keyCode)
  {
   case teclas.UP:
    dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
    y= y - movimiento;
   break;

   case teclas.DOWN:
    dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
    y= y + movimiento;
   break;

   case teclas.LEFT:
   dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
   x= x - movimiento;
   break;

   case teclas.RIGHT:
   dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
   x= x + movimiento;
   break;
  }
}
