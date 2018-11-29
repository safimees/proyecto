function dibujar() {
    var l = document.getElementById("lienzo");
    var contexto = l.getContext("2d");

    var x = 400;
    var y = 200;

    for (let index = 0; index <= x; index++) {
        pintarPixel(contexto, index, 200, "#00ff00");
    }

    for (let index = 0; index <= x; index++) {
        pintarPixel(contexto, 200, index, "#00ff00");
    }

    for (let index = 0; index <= x; index++) {
        pintarPixel(contexto, index, index, "#00ff00");
    }

    for (let index = 0; index <= x; index++) {
        pintarPixel(contexto, 400 - index, index, "#00ff00");
    }
}

function pintarPixel(c, x, y, color) {
    c.fillStyle = color;
    c.fillRect(x, y, 2, 2);
}