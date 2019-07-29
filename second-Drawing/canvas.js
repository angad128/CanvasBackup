var c = document.querySelector('canvas')

c.width = window.innerWidth;
c.height = window.innerHeight;


var ctx = c.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "rgba(28,180,251,0.7)";
ctx.fillRect(120, 120, 100, 100);

ctx.fillStyle = "#4faf50";
ctx.fillRect(220, 220, 100, 100);

// Line 
ctx.beginPath();
ctx.moveTo(400,400);
ctx.strokeStyle =  "#FF0000";
ctx.lineTo(500,500);
ctx.strokeStyle = "rgba(28,180,251,0.7)";
ctx.lineTo(600,400);
ctx.strokeStyle = "#3D3F3E";
ctx.stroke();

// Arc/Circle
// ctx.arc(500,500,30 , startAngle:Float, endAngle: Float, drawCounterClockwise: Bool(false));
ctx.beginPath();
ctx.arc(500,500,30 , 0, Math.PI*2, false);
c.strokeStyle = 'blue';
ctx.stroke();

for (i = 40; i >= 0; i--) {
	ctx.beginPath();
	var x = Math.random()*c.width;
	var y = Math.random()*c.height;
	ctx.arc(x,y,3 , 0, Math.PI*2, false);
	c.strokeStyle = 'blue';
	ctx.stroke();
}

