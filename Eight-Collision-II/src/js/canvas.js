import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = {
        x: Math.random() - 0.5,
        y: Math.random() - 0.5,
    }
}

particle.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.strokeStyle = this.color
    c.stroke()
    c.closePath()
}

particle.prototype.update = function() {
    this.draw()
    for (var i = 0; i < particles.length; i++) {
        if (this === particles[i]) continue;
        let distance = utils.distance(this.x,this.y,particles[i].x,particles[i].y)
        if ( (distance - 2*radius) <0 ) {
                console.log('Collision!!Boom!!BOOM')
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

// Implementation
let particles
function init() {
    particles = []
    for (var i = 0; i < 10; i++) {
        var radius = 100
        let x = utils.randomIntFromRange(radius, canvas.width-radius)
        let y = utils.randomIntFromRange(radius, canvas.height-radius)
        if (i!=0) {
            for (var j = 0; j < particles.length; j++) {
                let distance = utils.distance(x,y,particles[j].x,particles[j].y)
                if ( (distance - 2*radius) <0 ) {
                    x = utils.randomIntFromRange(radius, canvas.width-radius)
                    y = utils.randomIntFromRange(radius, canvas.height-radius) 
                    j = -1;
                }
            }
        }

        particles.push(new particle(x,y,radius,'blue'))
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // for (var i = particles.length - 1; i >= 0; i--) {
    //     particles[i].draw()
    // }
    particles.forEach(particle => {
        particle.update(particles);
    })
}

init()
animate()
