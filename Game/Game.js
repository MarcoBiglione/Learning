var area = document.getElementById("villaplatzi");
var papel = area.getContext("2d");
var cantidad = aleatorio(1, 5);
document.addEventListener("keyup", moverCerdito);
var xini= aleatorio(0,420);
var yini= aleatorio(0,420);
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


var fondo={
  url:"tile.png",
  cargaOK:false
};

var vaca ={
  url: "vaca.png",
  cargaOK: false
};

var cerdo ={
  url: "cerdo.png",
  cargaOK: false,
  posX:xini,
  posY:yini
};

var pollo ={
  url: "pollo.png",
  cargaOK: false,
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src= cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function moverCerdito(evento)
{
  movimiento = 20;
  switch(evento.keyCode)
    {
      case teclas.UP:
      if (cerdo.posY>0)
        {
          cerdo.posY=cerdo.posY - movimiento;
          clear();
          dibujar();
        }
      break;

      case teclas.DOWN:
      if(cerdo.posY<area.width -80)
        {
          cerdo.posY = cerdo.posY + movimiento;
          clear();
          dibujar();
        }
      break;

      case teclas.LEFT:
      if (cerdo.posX > 0)
        {
          cerdo.posX = cerdo.posX - movimiento;
          clear();
          dibujar();
        }
      break;

      case teclas.RIGHT:
      if(cerdo.posX < area.width - 80)
        {
          cerdo.posX = cerdo.posX + movimiento;
          clear();
          dibujar();
        }
      break;
      }

}
function cargarFondo()
  {
    fondo.cargaOK = true;
    dibujar();
  }
function cargarVaca()
  {
    vaca.cargaOK = true;
    dibujar();
  }
function cargarCerdo()
  {
    cerdo.cargaOK = true;
    dibujar();
  }
function cargarPollo()
  {
    pollo.cargaOK = true;
    dibujar();
  }
function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    for(var v=0; v < cantidad ; v++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    papel.drawImage(cerdo.imagen, cerdo.posX, cerdo.posY);
  }
  if(pollo.cargaOK)
  {
    for(var v=0; v < cantidad ; v++)
    {
      var x = aleatorio (0, 7);
      var y = aleatorio (0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
  }

}


function aleatorio(min, max)
  {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
  }

function clear()
{
  papel.clearRect(0, 0, area.width, area.height);
  dibujar();
}
