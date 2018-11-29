var lienzoOrigen;
var lienzoResultado;

var ctxOrigen;
var ctxResultado;

var imgOrigen;
var imgResultado;


document.getElementById('cargar').addEventListener('change', leerImagen);

function prepararResultados(){
  lienzoResultado = document.getElementById('canvas2');
  ctxResultado = lienzoResultado.getContext('2d');
  lienzoResultado.height = lienzoOrigen.height;
  lienzoResultado.width = lienzoOrigen.width;
  imgOrigen = ctxOrigen.getImageData(0, 0, lienzoOrigen.width, lienzoOrigen.height);
  imgResultado = ctxResultado.createImageData(lienzoOrigen.width, lienzoOrigen.height);
}

function leerImagen(e){
  var archivo = e.target.files[0];
  if(archivo){
    var lector = new FileReader();
    lector.readAsDataURL(archivo);
    lector.onload = function(event){
      ponerImgEnCanvas(event.target.result);
    }
  }
}

function ponerImgEnCanvas(datosImg){
  var img = new Image();
  img.src = datosImg;
  img.onload = function(){
    lienzoOrigen = document.getElementById('canvas');
    ctxOrigen = lienzoOrigen.getContext('2d');
    lienzoOrigen.width=img.width;
    lienzoOrigen.height=img.height;
    ctxOrigen.drawImage(img, 0, 0);
    prepararResultados();
  }
}


function copiar(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

      imgResultado.data[i+0] = imgOrigen.data[i+0]
      imgResultado.data[i+1] = imgOrigen.data[i+1]
      imgResultado.data[i+2] = imgOrigen.data[i+2]
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function escalaGrises(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

    var prom = (imgOrigen.data[i+0] + imgOrigen.data[i+1] + imgOrigen.data[i+2])/3;

      imgResultado.data[i+0] = prom;
      imgResultado.data[i+1] = prom;
      imgResultado.data[i+2] = prom;
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function blancoNegro(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

    var prom = (imgOrigen.data[i+0] + imgOrigen.data[i+1] + imgOrigen.data[i+2])/3;

      imgResultado.data[i+0] = prom;
      imgResultado.data[i+1] = prom;
      imgResultado.data[i+2] = prom;
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function rojos(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

    var prom = (imgOrigen.data[i+0] + imgOrigen.data[i+1] + imgOrigen.data[i+2])/3;

      imgResultado.data[i+0] = imgOrigen.data[i+0]
      imgResultado.data[i+1] = 0;
      imgResultado.data[i+2] = 0;
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function verdes(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

    var prom = (imgOrigen.data[i+0] + imgOrigen.data[i+1] + imgOrigen.data[i+2])/3;

      imgResultado.data[i+0] = 0;
      imgResultado.data[i+1] = imgOrigen.data[i+1]
      imgResultado.data[i+2] = 0;
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function azules(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

    var prom = (imgOrigen.data[i+0] + imgOrigen.data[i+1] + imgOrigen.data[i+2])/3;

      imgResultado.data[i+0] = 0;
      imgResultado.data[i+1] = 0;
      imgResultado.data[i+2] = imgOrigen.data[i+2]
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function negativo(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

      imgResultado.data[i+0] = 255-imgOrigen.data[i+0]
      imgResultado.data[i+1] = 255-imgOrigen.data[i+1]
      imgResultado.data[i+2] = 255-imgOrigen.data[i+2]
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}

function aclarado(){
  var i;

  for (i = 0; i < imgOrigen.data.length; i+=4){

    r=imgOrigen.data[i+0]+0;
    g=imgOrigen.data[i+1]+0;
    b=imgOrigen.data[i+2]+0;

    if(r<0) r=0; if(r>255) r=255;
    if(g<0) g=0; if(g>255) g=255;
    if(b<0) b=0; if(b>255) b=255;

      imgResultado.data[i+0] = r;
      imgResultado.data[i+1] = g;
      imgResultado.data[i+2] = b;
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);

}
