var c = document.getElementById('myCanvas')

c.width = window.innerWidth;
c.height = window.innerHeight;


var ctx = c.getContext("2d");


// var radius = 30;
var x = Math.random()*innerWidth;
var y = Math.random()*innerHeight;

var dx =  (Math.random() - 0.5)*10;
var dy = (Math.random() - 0.5)*10;
function animate(){
	requestAnimationFrame(animate);
	// ctx.clearRect(0,0, innerWidth,innerHeight);

	ctx.beginPath();
	ctx.arc(x,y,radius , 0, Math.PI*2, false);
	c.strokeStyle = 'blue';
	ctx.stroke();

	//bounce from screen
	if (x+radius>innerWidth || x-radius<0) {
		dx = -dx;
	} 
	if (y+radius>innerHeight || y-radius<0) {
		dy = -dy;
	} 

	//changes position on circle
	x += dx;
	y += dy;
}
animate();


// var R = 30;

// function animate() {
// 	requestAnimationFrame(animate);
		
// 	var r = Math.floor(Math.random()* 256);
// 	var g = Math.floor(Math.random()* 256);
// 	var b = Math.floor(Math.random()* 256);
// 	var cssColor = 'rgb(' + r +', ' + g + ',' + b +')';

// 	// // Arc/Circle
// 	ctx.beginPath();
// 	ctx.arc(500,500,R , 0, Math.PI*2, false);
// 	c.strokeStyle = cssColor;
// 	ctx.stroke();

// 	R += 10;

// }
// animate();

