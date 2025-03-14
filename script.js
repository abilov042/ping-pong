
let player1 = document.getElementsByClassName("player1")[0];
let player2 = document.getElementsByClassName("player2")[0];
let ball = document.getElementsByClassName("ball")[0];


let y1 = 400;
let y2 = 400;
let move = 15;
document.addEventListener('keydown', function(event) {
    console.log(player1);
    
    if (event.key === 'ArrowDown') {
        y1+=move;
        player2.style.marginTop = y1 + "px";
        
    }
    else if(event.key === "ArrowUp"){
        y1-=move;
        player2.style.marginTop = y1 + "px";
    }
    if(event.key === "s"){
        y2+=move;
        player1.style.marginTop = y2 + "px";
    }
    else if(event.key === "w"){
        y2-=move;
        player1.style.marginTop = y2 + "px";
    }

});

var ballX = 512;
var ballY = 400;
let speed = -15;
setInterval(function() {
    ballX += speed;
    ball.style.marginLeft = ballX + "px";

    console.log(y2);
    
    console.log(ballY);
    
    if(ballX > window.innerWidth - 195 && (ballY >= y1  && ballY < y1 +80)){
        speed = (-1) * speed;
    }
    else if(ballX > window.innerWidth - 195 && (ballY < y1  || ballY > y1 +80)){
        console.log("player 1 won");
        
    }
    else if(ballX < -(window.innerWidth - 195) && (ballY >= y2  && ballY < y2 + 80)){
        speed = (-1) * speed;
    }
    else if(ballX < -(window.innerWidth - 195) && (ballY < y2  || ballY > y2 +80)){
        console.log("payer 2 won");
        
    }

}, 10);