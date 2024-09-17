

function randomNum(){
    return Math.floor(Math.random()*6) + 1;
}
function makeImgPath(num){
    return `images/dice${num}.png`;
}

function decision(num1, num2){
    if(num1 === num2){
        return "Draw!!";
    }
    return (num1 > num2)? "🚩Player 1 Wins!" : "Player 2 Wins!🚩";
}

// dice 1
var n1 = randomNum();
var dice = document.querySelector(".img1");
dice.setAttribute("src", makeImgPath(n1));

// dice 2
var n2 = randomNum();
dice = document.querySelector(".img2");
dice.setAttribute("src", makeImgPath(n2));

// result
result = document.querySelector("h1");
result.innerHTML = decision(n1, n2);