var c = document.getElementById('myCanvas')

	c.width = window.innerWidth;
	c.height = window.innerHeight;

var ctx = c.getContext("2d");

var colorArray = [
	"#2C3E50",
	"#E74C3C",
	"#ECF0F1",
	"#3459D9",
	"#298089",
];
var maxRadius = 60;
// var minRadius = 4;
var mouse = {
	x: undefined,
	y: undefined 
}

window.addEventListener('mousemove', function(event) {
	// console.log(event);
	mouse.x = event.x;
	mouse.y = event.y;
});
window.addEventListener('resize', function() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
});


function Circle(x,y,r,dx,dy) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = r;
	this.minRadius = this.radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];

	this.draw = function() {
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius , 0, Math.PI*2, false);
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

		//interactivity with mouse
		if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y-this.y && mouse.y-this.y>-50) {
			if (this.radius < maxRadius) {
				this.radius +=1;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}
		this.draw();
	}
}


var circleArray = [];

function init() {
	circleArray = [];
	for (var i = 0; i < 800; i++) {
		var radius = (Math.random()*3 + 1);
		var x = Math.random()*(innerWidth-radius*2)+radius;
		var y = Math.random()*(innerHeight-radius*2)+radius;
		var dx =  (Math.random() - 0.5);
		var dy = (Math.random() - 0.5);

		circleArray.push(new Circle(x,y,radius,dx,dy)); 
	} 
}

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0, innerWidth,innerHeight);

	for (var i = circleArray.length - 1; i >= 0; i--) {
		circleArray[i].update();
	}

}
init();
animate();


