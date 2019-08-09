var buttonColors = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$(document).on("keypress", function (e) {
    if (e.key.toLowerCase() == "a" && !gameStarted) {
        nextSequence();
        gameStarted = true;
    }
});

function nextSequence() {
    userClickedPattern.length = 0;
    level++;
    $("h1").html("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //select button with same color as randomChosen Color
    $("." + randomChosenColor)
        .fadeOut(250)
        .fadeIn(250);
    playSound(randomChosenColor);
}

$(".btn").on("click", function (e) {
    e.preventDefault();
    var userChosenColor = e.currentTarget.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").html("Game Over, Press A Key to Restart")
        startOver();
    }
}

function startOver() {
    level = 0;
    gameStarted = false;
    gamePattern.length = 0;
}