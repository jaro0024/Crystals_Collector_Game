
// Global variables

var randNum;
var purpleNum, pinkNum, orangeNum, blueNum;
var totalScore = 0;
var wins = 0;
var losses = 0;

$("#totalScore").html(totalScore);


// function to start game
function initGame() {
    //To get a random number between 19 and 120
    randNum = Math.floor(Math.random() * 101 + 19);
    $("#randomNum").html(randNum);

    // To get random numbers for each crystal between 1 and 12
    purpleNum = Math.floor(Math.random() * 11 + 1);
    pinkNum = Math.floor(Math.random() * 11 + 1);
    orangeNum = Math.floor(Math.random() * 11 + 1);
    blueNum = Math.floor(Math.random() * 11 + 1);
}

// To get values when player clicks on crystals

$("#purple").on("click", function() {
    totalScore += purpleNum;
    $("#purple").html(totalScore);
    winLose();
    console.log(totalScore);
});

$("#pink").on("click", function() {
    totalScore += pinkNum;
    $("#pink").html(totalScore);
    winLose();
    console.log(totalScore);
});

$("#orange").on("click", function() {
    totalScore += orangeNum;
    $("#orange").html(totalScore);
    winLose();
    console.log(totalScore);
});

$("#blue").on("click", function() {
    totalScore += blueNum;
    $("#blue").html(totalScore);
    winLose();
    console.log(totalScore);
});


// Win / lose function

function winLose() {
    if(totalScore == randNum) {
        wins++;
        $("#winTotal").html(wins);
        resetGame();
    }

    if(totalScore >= randNum) {
        losses++;
        $("#lossTotal").html(losses);
        resetGame();
    }
}


// Function to reset the game
function resetGame() {
    randNum = Math.floor(Math.random() * 101 + 19);
    purpleNum = Math.floor(Math.random() * 11 + 1);
    pinkNum = Math.floor(Math.random() * 11 + 1);
    orangeNum = Math.floor(Math.random() * 11 + 1);
    blueNum = Math.floor(Math.random() * 11 + 1);
    totalScore = 0;
    initGame();
}

// Ready function
$(function() {

    initGame();



});

