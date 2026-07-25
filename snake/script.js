const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const startButton = document.getElementById("startButton");

const gridSize = 20;  // размер одного сегмента
let snake, direction;

function startGame(){
    snake = [{
        x: 200,
        y: 200
    }];

    direction = "RIGHT";

    scoreEl.textContent = "Счет: 0";
    startButton.style.display = "none";

    gameLoop();
}

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.forEach(segment => {
        ctx.fillStyle = "blue";
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.fillStyle = "black";
        ctx.strokeRect(segment.x, segment.y, gridSize, gridSize);
    });

    let head = {...snake[0]};
    
    if(direction === "UP"){
        head.y -= gridSize;
    }
    if(direction === "DOWN"){
        head.y += gridSize;
    }
    if(direction === "LEFT"){
        head.x -= gridSize;
    }
    if(direction === "RIGHT"){
        head.x += gridSize;
    }

    snake.unshift(head);

    if(snake.length > 0){
        setTimeout(gameLoop, 150);
    }

    console.log(snake);    
}

function changeDirection(event){
    const key = event.key;

    if(key == "ArrowUp" && direction !== "DOWN"){
        direction = "UP";
    } else if(key == "ArrowDown" && direction !== "UP"){
        direction = "DOWN";
    } else if(key == "ArrowLeft" && direction !== "RIGHT"){
        direction = "LEFT";
    } else if(key == "ArrowRight" && direction !== "LEFT"){
        direction = "RIGHT";
    }

    // console.log(direction);    
}

document.addEventListener("keydown", changeDirection);
startButton.addEventListener("click", startGame);