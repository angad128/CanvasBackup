function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1
  const yDist = y2 - y1

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { randomIntFromRange, randomColor, distance }

    // if (this.y+this.radius+this.dy > canvas.height || this.y-this.radius<0) {
    //     this.dy = -this.dy
    // } 
    // if (this.x+2*this.radius+this.dx>canvas.width || this.x-this.radius<0) {
    //     this.dx = -this.dx
    // }
    // this.x += this.dx
    // this.y += this.dy
