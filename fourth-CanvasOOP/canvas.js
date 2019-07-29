var c = document.getElementById('myCanvas')

c.width = window.innerWidth;
c.height = window.innerHeight;


var ctx = c.getContext("2d");

function Circle(x,y,r,dx,dy,cssColor) {
	this.x = x;
	this.y = y;
	this.radius = r;
	this.dx = dx;
	this.dy = dy;
	this.color = cssColor

	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius , 0, Math.PI*2, false);
		ctx.strokeStyle = 'blue';
		ctx.stroke();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
	this.update = function() {
		if (this.x+this.radius>innerWidth || this.x-this.radius<0) {
			this.dx = -this.dx;
		} 
		if (this.y+this.radius>innerHeight || this.y-this.radius<0) {
			this.dy = -this.dy;
		} 
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}


var circleArray = [];
for (var i = 0; i < 100; i++) {
	var radius = 30;
	var x = Math.random()*(innerWidth-radius*2)+radius;
	var y = Math.random()*(innerHeight-radius*2)+radius;
	var dx =  (Math.random() - 0.5)*10;
	var dy = (Math.random() - 0.5)*10;
	
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	var cssColor = 'rgb(' + r +', ' + g + ',' + b +')';

	circleArray.push(new Circle(x,y,radius,dx,dy,cssColor)); 
 } 


function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, innerWidth,innerHeight);

	for (var i = circleArray.length - 1; i >= 0; i--) {
		circleArray[i].update();
	}

}
animate();
