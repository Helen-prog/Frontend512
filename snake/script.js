// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// const scoreEl = document.getElementById("score");
// const startButton = document.getElementById("startButton");

// const gridSize = 20;  // размер одного сегмента
// let snake, direction, foot, score, gameSpeed, gameRunning;

// function startGame() {
//     snake = [{
//         x: 200,
//         y: 200
//     }];

//     direction = "RIGHT";
//     score = 0;
//     gameSpeed = 200;
//     foot = getRandomFootPosition();
//     gameRunning = true;

//     scoreEl.textContent = "Счет: 0";
//     startButton.style.display = "none";

//     gameLoop();
// }

// function getRandomFootPosition() {
//     return {
//         x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
//         y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
//     }
// }

// function gameOver() {
//     gameRunning = false;
//     let result = document.createElement("p");
//     result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${score}</span>`;
//     scoreEl.prepend(result);
//     startButton.style.display = "inline";
// }

// function gameLoop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "purple";
//     ctx.fillRect(foot.x, foot.y, gridSize, gridSize);
//     ctx.fillStyle = "black";
//     ctx.strokeRect(foot.x, foot.y, gridSize, gridSize);

//     snake.forEach(segment => {
//         ctx.fillStyle = "blue";
//         ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
//         ctx.fillStyle = "black";
//         ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
//     });

//     let head = { ...snake[0] };

//     if (direction === "UP") {
//         head.y -= gridSize;
//     }
//     if (direction === "DOWN") {
//         head.y += gridSize;
//     }
//     if (direction === "LEFT") {
//         head.x -= gridSize;
//     }
//     if (direction === "RIGHT") {
//         head.x += gridSize;
//     }

//     if (head.x < 0 || head.x >= canvas.width || head.y >= canvas.height || head.y < 0) {
//         gameOver();
//         return;
//     }

//     for (let i = 1; i < snake.length; i++) {
//         if(head.x === snake[i].x && head.y === snake[i].y){
//             gameOver();
//             return;
//         }
//     }

//     snake.unshift(head);

//     if (head.x === foot.x && head.y === foot.y) {
//         foot = getRandomFootPosition();
//         score++;
//         scoreEl.textContent = `Счет: ${score}`;
//         if (gameSpeed > 50) {
//             gameSpeed -= 5;
//         }
//     } else {
//         snake.pop();
//     }

//     if (snake.length > 0) {
//         setTimeout(gameLoop, gameSpeed);
//     }

//     // console.log(snake);
// }

// function changeDirection(event) {
//     const key = event.key;

//     if (key == "ArrowUp" && direction !== "DOWN") {
//         direction = "UP";
//     } else if (key == "ArrowDown" && direction !== "UP") {
//         direction = "DOWN";
//     } else if (key == "ArrowLeft" && direction !== "RIGHT") {
//         direction = "LEFT";
//     } else if (key == "ArrowRight" && direction !== "LEFT") {
//         direction = "RIGHT";
//     }

//     // console.log(direction);    
// }

// document.addEventListener("keydown", changeDirection);
// startButton.addEventListener("click", startGame);




// =================================================
class Game {
    constructor(element, gameBoard, size) {
        this.element = element;
        this.width = gameBoard;
        this.height = gameBoard;
        // this.width = this.height = gameBoard;
        this.gridSize = size;

        this.canvas = document.createElement("canvas");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');

        this.element.append(this.canvas);

        this.scoreEl = document.getElementById("score");
        this.startButton = document.getElementById("startButton");

        this.snake = [];

        this.direction = "RIGHT";
        this.gameSpeed = 200;
        this.foot = {};
        this.score = 0;

        this.gameRunning = false;
    }

    startGame() {
        this.foot = this.getRandomFootPosition();
        this.gameRunning = true;
        this.snake = [{
            x: this.canvas.width / 2,
            y: this.canvas.height / 2
        }];

        this.scoreEl.textContent = "Счет: 0";
        this.startButton.style.display = "none";

        this.gameLoop();
    }

    getRandomFootPosition() {
        return {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize,
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize
        }
    }

    gameLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = "purple";
        this.ctx.fillRect(this.foot.x, this.foot.y, this.gridSize, this.gridSize);
        this.ctx.fillStyle = "black";
        this.ctx.strokeRect(this.foot.x, this.foot.y, this.gridSize, this.gridSize);

        this.snake.forEach(segment => {
            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(segment.x, segment.y, this.gridSize, this.gridSize);
            this.ctx.fillStyle = "black";
            this.ctx.strokeRect(segment.x, segment.y, this.gridSize, this.gridSize);
        });

        let head = { ...this.snake[0] };

        if (this.direction === "UP") {
            head.y -= this.gridSize;
        }
        if (this.direction === "DOWN") {
            head.y += this.gridSize;
        }
        if (this.direction === "LEFT") {
            head.x -= this.gridSize;
        }
        if (this.direction === "RIGHT") {
            head.x += this.gridSize;
        }

        if (head.x < 0 || head.x >= this.canvas.width || head.y >= this.canvas.height || head.y < 0) {
            this.gameOver();
            return;
        }

        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                this.gameOver();
                return;
            }
        }

        this.snake.unshift(head);

        if (head.x === this.foot.x && head.y === this.foot.y) {
            this.foot = this.getRandomFootPosition();
            this.score++;
            this.scoreEl.textContent = `Счет: ${this.score}`;
            if (this.gameSpeed > 50) {
                this.gameSpeed -= 5;
            }
        } else {
            this.snake.pop();
        }

        if (this.snake.length > 0) {
            setTimeout(() => this.gameLoop(), this.gameSpeed);
        }

        // console.log(this.snake);
    }

    changeDirection(event) {
        const key = event.key;
        // console.log(key);


        if (key == "ArrowUp" && this.direction !== "DOWN") {
            this.direction = "UP";
        } else if (key == "ArrowDown" && this.direction !== "UP") {
            this.direction = "DOWN";
        } else if (key == "ArrowLeft" && this.direction !== "RIGHT") {
            this.direction = "LEFT";
        } else if (key == "ArrowRight" && this.direction !== "LEFT") {
            this.direction = "RIGHT";
        }

        // console.log(this.direction);
    }

    gameOver() {
        this.gameRunning = false;
        let result = document.createElement("p");
        result.innerHTML = `<span style="color: red">Игра окончена! Ваш счет: ${this.score}</span>`;
        this.scoreEl.prepend(result);
        this.startButton.style.display = "inline";
    }
}

const root = document.getElementById("root");
const game = new Game(root, 400, 20);
document.addEventListener("keydown", (event) => game.changeDirection(event));
game.startButton.addEventListener("click", () => game.startGame());
// game.startButton.addEventListener("click", function () {
//     game.startGame();
// });
