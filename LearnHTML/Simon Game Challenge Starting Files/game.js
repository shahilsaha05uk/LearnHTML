var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColour = "";

var pattern = [];

var currentLevel = 0;

var tmpPattern = [];

var isGameOn = false;

const STATUS = {
    LEVEL : function (){
        return `Level ${currentLevel}`;
    },
    DEFAULT: "Press any Key to Start"
};

$(document).on("keyup", function (){
    
    if(!isGameOn) {

        // Start the game
        console.log("Start the Game");
        startGame();
        isGameOn = true;
    }
})

$(".btn").on("click", OnButtonClick)


// Button Updates
function OnButtonClick(){
    if(!isGameOn) return;

    let btn = $(this);
    let id = btn.attr("id");

    if(tmpPattern.length > 0)
    {
        if(tmpPattern.at(0) === id){
            flashBtn(btn);
            playBtnSound(id);
            tmpPattern = tmpPattern.slice(1);
        }
        else {
            // Game Over
            playWrongSound();
            pattern = [];
            tmpPattern = [];
            isGameOn = false;

            currentLevel = 0;
            updateStatus(STATUS.DEFAULT);
        }
    }

    if(tmpPattern.length <=0 && isGameOn){
        isGameOn = false;
        setTimeout(function (){
            currentLevel++;
            updateStatus(STATUS.LEVEL);
            nextSequence();
            isGameOn = true;
        }, 2000);
    }
}

function flashBtn(btn){
    btn.fadeOut(100).fadeIn(100);
}

// Playing the sounds
function playBtnSound(btnID){
    var sound = new Audio(`sounds/${btnID}.mp3`);
    sound.play();
}
function playWrongSound(){
    var sound = new Audio(`sounds/wrong.mp3`);
    sound.play();
}

// Updating the status
function updateStatus(content){
    $("#level-title").text(content);
}

// Starting the game
function startGame(){
    
    currentLevel++;
    updateStatus(STATUS.LEVEL);
    
    setTimeout(function (){
        nextSequence();
    }, 3000);
}

// Setting up the Level
function nextSequence(){

    // add the next button
    let rIndex = Math.floor(Math.random() * (buttonColors.length));
    randomChosenColour = buttonColors[rIndex];
    pattern.push(randomChosenColour);

    // reveal the next pattern
    var item = $("#" + randomChosenColour);
    flashBtn(item);
    playBtnSound(randomChosenColour);

    // reset the pattern
    if(tmpPattern.length > 0) tmpPattern = [];
    tmpPattern = pattern;
}