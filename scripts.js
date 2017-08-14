window.addEventListener('load', function () {
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")
    const ballRadius = 10
    const colors = ["#0095DD", "#000", "green", "pink"]
    let fillStyleColor = _.sample(colors)
    let dx = 2
    let dy = -2
    let x = canvas.width/2;
    let y = canvas.height-30;

    function drawBall () {
        ctx.beginPath()
        ctx.arc(x, y, ballRadius, 0, Math.PI*2)
        ctx.fillStyle = fillStyleColor
        ctx.fill()
        ctx.closePath()
    }

    function draw () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBall()

        if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            randomColor()
            dx = -dx;
        }

        if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
            randomColor()
            dy = -dy;
        }

        x += dx
        y += dy
    }

    function randomColor () {
        fillStyleColor = _.sample(colors)
    }

    setInterval(draw, 10)
})
