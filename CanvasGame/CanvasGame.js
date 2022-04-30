var absX = 250;
var absY = 250;

var velX = 2;
var velY = 2;

var c = document.getElementById("gigi");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(absX, absY, 40, 0, 2 * Math.PI);  /* x, y*/
ctx.stroke();


document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            console.log("sx");
            sx();
            break;
        case 38:
            console.log("su");
            su();
            break;
        case 39:
            console.log("dx");
            dx();
            break;
        case 40:
            console.log("giu");
            giu();
            break;
    }
}

/* pulsante applica*/

function applica(){
    velX = document.getElementById("x").value;
    parseInt("x");

    velX = document.getElementById("x").value;
    parseInt("x");
}


/* frecce su/giù */

function giu() {
    clear();
    absY = absY + 2;
    redraw();
    
}
function su() {
    clear();
    absY = absY - 2;
    redraw();
    
}



/* frecce dx/sx*/

function dx() {
    clear();
    absX = absX + 2;
    redraw();
    
}
function sx() {
    clear();
    absX = absX - 2;
    redraw();
    
}



/* funzioni pulizia e scrittura del canvas */

function clear() {
    var canvasTemp = document.getElementById("gigi");
    var ctxTemp = canvasTemp.getContext("2d");
    ctxTemp.clearRect(0, 0, 1000, 1000);
}

function redraw() {
    var c = document.getElementById("gigi");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(absX, absY, 40, 200, 200 * Math.PI);  /* x, y, raggio */ 
    ctx.stroke();
}