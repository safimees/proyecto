document.getElementById('cargar').addEventListener('change', leerImagen);

    function leerImagen(e){
        
        var archivo = e.target.files[0];
        if(archivo){        
            var lector = new FileReader();
            lector.readAsDataURL(archivo);         
            lector.onload = function(evento){
                ponerImgEnCanvas(evento.target.result);
            }
        }
    }


    function ponerImgEnCanvas(datosImg){  
        var img = new Image();
        img.src = datosImg;
        img.onload = function(){
            var canvas = document.getElementById('miCanvas');
            var contexto = canvas.getContext('2d');
            //canvas.width=img.width;
            //canvas.height=img.height;
            contexto.drawImage(img, 0, 0);
        }
    }







