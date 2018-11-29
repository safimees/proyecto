var color="#000000";
var canvas;
var contexto;

var puntos = []; //arreglo de puntos para guardar las coordenadas de los puntos


//la recta se define por dos puntos, el punto inicial de la recta
//ser� la posici�n donde se haga clic por primera vez y el punto
//final estara definido por la ubicaci�n del segundo clic
var primerPunto=true;  //bandera para controlar los clics

function ponerPixel(contexto, x,y, color){
    contexto.fillStyle = color;
    contexto.fillRect(x, y, 1, 1);
} 


function dibujar(event){  //Esta funci�n se ejecuta cada que se hace clic sobre el lienzo

  canvas = document.getElementById("lienzo"); //accedemos al lienzo de dibujo
  contexto = canvas.getContext("2d"); //obtenemos el contexto 2d del lienzo

  if(primerPunto){  //Si es el primer clic, se lee el primer punto de la l�nea
    puntos.push({x:event.offsetX, y:event.offsetY});
    ponerPixel(contexto, puntos[puntos.length-1].x, puntos[puntos.length-1].y, color);
    primerPunto = false;
  }
  else{  //pintar l�nea
    lineaBresenham(puntos[puntos.length-1].x, puntos[puntos.length-1].y, event.offsetX, event.offsetY, contexto, color);
    puntos.push({x:event.offsetX, y:event.offsetY});
  }
  
}

//Implementaci�n del algoritmo de Bresenham para l�neas
function lineaBresenham(x0, y0, x1, y1, contexto, color){
   var dx = Math.abs(x1-x0);
   var dy = Math.abs(y1-y0);
   var sx = (x0 < x1) ? 1 : -1;
   var sy = (y0 < y1) ? 1 : -1;
   var err = dx-dy;

   //contexto.fillText( "(" + x1 + "," + y1 + ")", x1+4, y1);

   while(x0!=x1 || y0!=y1){
     ponerPixel(contexto, x0, y0, color);
     var e2 = 2*err;
     if (e2 >-dy){ err -= dy; x0  += sx; }
     if (e2 < dx){ err += dx; y0  += sy; }
   }
}


function repintar(){
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 1; i < puntos.length; i++) {
    lineaBresenham(puntos[i-1].x, puntos[i-1].y, puntos[i].x, puntos[i].y, contexto, color);
  }
  
}

function cambiarColor(){ 
  color = document.getElementById("color").value; //obtenemos el color para pintar
  repintar();
}

function reiniciar(){ 
  puntos = [];
  repintar();
  primerPunto=true;
}

function verArreglo(){
  var info = "";
  for(var i = 0; i < puntos.length; i++) 
    info  += "punto "+i+": ("+puntos[i].x+","+puntos[i].y+")"+"\n";
  alert(info); 
}






