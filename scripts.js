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
    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width-paddleWidth)/2;
    var rightPressed = false;
    var leftPressed = false;

    function drawBall () {
        ctx.beginPath()
        ctx.arc(x, y, ballRadius, 0, Math.PI*2)
        ctx.fillStyle = fillStyleColor
        ctx.fill()
        ctx.closePath()
    }

    function drawPaddle () {
        ctx.beginPath()
        ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight)
        ctx.fillStyle = "#0095DD"
        ctx.fill()
        ctx.closePath()
    }

    function draw () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        drawBall()
        drawPaddle()

        if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
            randomColor()
            dx = -dx;
        }

        if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
            randomColor()
            dy = -dy;
        }

        if (rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }

        x += dx
        y += dy
    }

    function randomColor () {
        fillStyleColor = _.sample(colors)
    }

    function keyDownHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        }
    }

    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    setInterval(draw, 10)
})
