const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// // create the unit
const box = 32;

// // load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// // load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// // create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// // create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// // create the score var

let score = 0;

// //control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}
// // speed snake
function SnakeSpeed(score){
    if ((score == (3*game)) && (game == (score/3)))
    {
        clearInterval(game);
        let test = 140-(score*5);
        game = setInterval(draw,test); 
    }
}

function draw(){
    // block scroll
    if (d == "LEFT" || d == "UP" || d == "RIGHT" || d == "DOWN"){
        disable_scroll();
    }
// draw everything to the canvas
    ctx.drawImage(ground,0,0);
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "#038703" : "#00E305";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "#010938";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score ++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    // dinamic speed snake
    SnakeSpeed(score);
    // add new Head  
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        ctx.font = "80px arial";
        var gradient = ctx.createLinearGradient(0, 0, 230, 500);
        gradient.addColorStop(0, "#FF0080");
        gradient.addColorStop(1, "#FF9933");
        ctx.fillStyle = gradient;
        ctx.fillText("Game Over", 114, 300);
        reloaded();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}
// call draw function every 140 ms
let game = setInterval(draw,140); 

// reloaded
function reloaded () {
        enable_scroll();
        dead.play();
        clearInterval(game);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
} 
function resstart () {
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// // create the unit
const box = 32;

// // load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// // load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// // create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// // create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// // create the score var

let score = 0;

// //control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}
// // speed snake
function SnakeSpeed(score){
    if ((score == (3*game)) && (game == (score/3)))
    {
        clearInterval(game);
        let test = 140-(score*5);
        game = setInterval(draw,test); 
    }
}

function draw(){
    // block scroll
    if (d == "LEFT" || d == "UP" || d == "RIGHT" || d == "DOWN"){
        disable_scroll();
    }
// draw everything to the canvas
    ctx.drawImage(ground,0,0);
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "#038703" : "#00E305";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "#010938";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y){
        score ++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    // dinamic speed snake
    SnakeSpeed(score);
    // add new Head  
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        ctx.font = "80px arial";
        var gradient = ctx.createLinearGradient(0, 0, 230, 500);
        gradient.addColorStop(0, "#FF0080");
        gradient.addColorStop(1, "#FF9933");
        ctx.fillStyle = gradient;
        ctx.fillText("Game Over", 114, 300);
        reloaded();
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}
// call draw function every 140 ms
let game = setInterval(draw,140); 

// reloaded
function reloaded () {
        enable_scroll();
        dead.play();
        clearInterval(game);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
} 
}