var d = document.getElementById("dibujito");
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujoPorClick()
  {
    var lineas = parseInt(texto.value);
    var l = 0
    var yi, xf;
    var xi, yi;
    var rectas = parseInt(texto.value);
    var espacio = ancho/lineas;

    for(l = 0; l < lineas; l++)
      {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("#AAF", 0, yi, xf, 300);
        console.log("lineas" + l)
      }
    for(l = 0; l <lineas; l++)
      {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea("#AAF", xi, 0, 300, yf);
      }
    for(l = 0; l < lineas; l++)
      {
        xi = espacio * l;
        yf = 300 - (l * espacio);
        dibujarLinea("#AAF", xi, 0, 0, yf);
      }
    for(l = 0; l < lineas; l++)
      {
        xi = 300 - (l * espacio);
        yf = espacio * l;
        dibujarLinea("#AAF", xi, 300, 300, yf);
      }
    for(l = 0; l <= lineas; l++)
      {
        yi= l * espacio;
        xf= 150 + (l * espacio);
        dibujarLinea("green", 150, yi, xf , 150);
        console.log("dibujarLinea");
      }
    for(l = 0; l <= lineas; l++)
      {
        yi= l * espacio;
        xf= 150 - (l * espacio);
        dibujarLinea("green", 150, yi, xf , 150);
      }
    for(l = 0; l <= lineas; l++)
      {
        xi= l * espacio;
        yf= 150 + (l * espacio);
        dibujarLinea("green", xi, 150, 150 , yf);
      }
    for(l = 0; l <= lineas; l++)
      {
        xi= 150 + (l * espacio);
        yf= 300 - (l * espacio);
        dibujarLinea("green", xi, 150, 150 , yf);
      }
    function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
      {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(x_inicial,y_inicial);
        lienzo.lineTo(x_final,y_final)
        lienzo.stroke();
        lienzo.closePath();
      }
  }
