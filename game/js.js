// SPAGHETTI CODE :D

const cv = document.getElementById('myCanvas');
const ctx = cv.getContext("2d");
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

const pintje = new Image();
pintje.src = "bier.png"
const bert = new Image();
bert.src = "bertkop.png";
const barfimg = new Image();
barfimg.src = "barf.png";
var audio = new Audio('barf.mp3');
var jantje = new Audio('janklaassen.mp3');

function drawBorders() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(cv.clientWidth, 0);
    ctx.lineTo(cv.clientWidth, cv.clientHeight);
    ctx.lineTo(0, cv.clientHeight);
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "#c47d4e"
    ctx.fill();
    ctx.stroke();

}
class circle {
    constructor(size) {
        this.size = size;
        this.posX = Math.floor(Math.random() * 300 + 100);
        this.posY = Math.floor(Math.random() * 300 + 100);
    }
    draw() {
        ctx.drawImage(pintje, this.posX, this.posY, 40, 60);
    }
    clear() {
        ctx.fillRect(this.posX, this.posY, 10, 10);
    }
}
const c = new circle(10);
var delay = 1000;
class barfje {
    constructor(size) {
        this.size = size;
        this.posX = c.posX;
        this.posY = c.posY;
    }
    draw() {
        ctx.drawImage(barfimg, this.posX + 25, this.posY + 25, 40, 60);
    }
    clear() {
        ctx.fillRect(this.posX, this.posY, 10, 10);
    }
}


function playGame() {
    var dx = 1;
    var dy = 0;
    speed = 0.5;
    var barf = new Array();
    const target = new circle(5);
    document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
            case 37:
                if (dx !== 1) {
                    dx = -1;
                    dy = 0;
                }

                break;
            case 38:
                if (dy !== 1) {
                    dx = 0;
                    dy = -1;
                }

                break;
            case 39:
                if (dx !== -1) {
                    dx = 1;
                    dy = 0;
                }

                break;
            case 40:
                if (dy !== -1) {
                    dx = 0;
                    dy = 1;
                }

                break;
            default:
                break;
        };
    })
    function move() {
        ctx.fillStyle = "beige";
        ctx.fillRect(0, 0, 600, 600);
        ctx.fillStyle = "black";
        if (c.posX > 550 && dx === 1) {
            dx = -1;
        }
        if (c.posX < 0 && dx === -1) {
            dx = 1;
        }
        if (c.posY > 520 && dy === 1) {
            dy = -1;
        }
        if (c.posY < 0 && dy === -1) {
            dy = 1;
        }
        c.posX += dx * speed;
        c.posY += dy * speed;


        ctx.drawImage(bert, c.posX, c.posY);



    }
    target.draw();
    var score = 0;
    var justpuked = false;

    var spelinterval = setInterval(
        () => {
            move();

            if (delay > 0) {
                justpuked = true;
                delay--;
            } else if (delay == 0) {
                justpuked = false;
            }



            barf.forEach((element) => {
                element.draw();
                if (Math.sqrt(Math.pow((element.posX - c.posX), 2) + Math.pow((element.posY - c.posY), 2)) < 45 && justpuked == false) {
                    clearInterval(spelinterval);
                    alert(`Je bent verloren met ${score + (barf.length * 24)} punten! Nieweird!`);
                }
            });
            target.draw();

            var distancePils = Math.sqrt(Math.pow((target.posX - c.posX), 2) + Math.pow((target.posY - c.posY), 2));
            if (distancePils < 50) {
                target.clear();
                target.posX = Math.floor(Math.random() * 500);
                target.posY = Math.floor(Math.random() * 500);
                barf.forEach((element) => {
                    if (Math.sqrt(Math.pow((target.posX - element.posX), 2) + Math.pow((target.posY - element.posY), 2)) < 100) {
                        target.posX = Math.floor(Math.random() * 500);
                        target.posY = Math.floor(Math.random() * 500);
                    }
                });
                target.draw();
                score++
                if (score > 24) {
                    score = 0;
                    speed = 0.5;
                    barf.push(new barfje(10));
                    audio.play();
                    justpuked = true;
                    delay = 1000;
                }
                speed = speed * 1.1;
                document.getElementById("score").innerText = score;
            }
        }, 1);

}

function getArrowKeyCode(event) {
    return event.keyCode;
}

function init() {
    drawBorders();
    playGame();
    document.getElementById("janknop").addEventListener("click", function () {
        jantje.play();
    })
    document.getElementById("restart").addEventListener("click", function () {
        window.location.reload();
    })

}
window.onload = init;