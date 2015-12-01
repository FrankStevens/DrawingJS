var c = document.createElement("canvas");
c.setAttribute("id", "myCanvas");
c.setAttribute("width", 400);
c.setAttribute("height", 400);

function setCanvas(width, height){
    c.setAttribute("width", width);
    c.setAttribute("height", width);
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

function clear (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function rect (x, y, width, height, fill){
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = fill || "#000000";
    ctx.fill();
    ctx.closePath();
}
function circ (x, y, radius, fill){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.fillStyle = fill || "#000000";
    ctx.fill();
    ctx.closePath();
}
function txt (x, y, msg, fill, font){
    ctx.font = font || "16px Arial";
    ctx.fillStyle = fill || "#000000";
    ctx.fillText(msg, x, y);
}
function img (x, y, source, width, height){
    var image = document.createElement("IMG");
    image.setAttribute("src", source);
    var w = width || image.naturalWidth;
    var h = height || image.naturalHeight;
    ctx.drawImage(image, x, y, w, h);
}
function line (x1, y1, x2, y2, stroke){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = stroke || "#000000";
    ctx.stroke();
    ctx.closePath();
}
