const canvas = document.getElementById('star-sky')
const context = canvas.getContext('2d')
const x = canvas.width = window.innerWidth
const y = canvas.height = window.innerHeight
const nStar = x / 10
const randomSize = Math.floor((Math.random() * 2) + 1)


let stars = []

function createStars() {
  stars = []
  for (var i = 0; i <= nStar; i++) {
    stars.push({
      x: Math.random() * x,
      y: Math.random() * y * 0.6,
      o: Math.random(),
      r: Math.random(),
      s: 0.01,
    })
    if (randomSize > .1) {
      context.shadowBlur = Math.floor((Math.random() * 15))
      context.shadowColor = "blue"
    }
  }
}


function drawing() {
  requestAnimationFrame(drawing)
  context.clearRect(0, 0, innerWidth, innerHeight)
  for (var i = 0; i <= nStar; i++) {
    var star = stars[i]
    if (star.o > 1 || star.o < 0) {
      star.s = -star.s
    }
    star.o += star.s
    context.beginPath()
    context.arc(star.x, star.y, star.r, 0, Math.PI * 2, false)
    context.strokeStyle = 'rgba(255, 255, 255, ' + star.o + ')'
    context.stroke()
  }
}

addEventListener('load', () => {
  createStars()
  drawing()
})

addEventListener('resize', () => {
  location.reload();
})
