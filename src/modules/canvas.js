const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

function drawSquare(x, y, length, color) {
   ctx.beginPath();
   ctx.rect(x, y, length, length);
   ctx.fillStyle = color;
   ctx.fill();
   ctx.closePath();
}

function draw() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   drawSquare(20, 20, 50, "#FF0000");
}
