
// Global variables

var randNum;
var purpleNum, pinkNum, orangeNum, blueNum;
var totalScore = 0;
var wins = 0;
var losses = 0;

// function to start game
function initGame() {
    //To get a random number between 19 and 120
    randNum = Math.floor(Math.random() * 101 + 19);
    $("#randomNum").html(randNum);

    // To get random numbers for each crystal between 1 and 12
    purpleNum = Math.floor((Math.random() * 12) + 1);
    pinkNum = Math.floor((Math.random() * 12) + 1);
    orangeNum = Math.floor((Math.random() * 12) + 1);
    blueNum = Math.floor((Math.random() * 12) + 1);
}

// To get values when player clicks on crystals and add them as the player clicks

$("#purple").click(function () {
    totalScore += purpleNum;
    $("#totalScore").html(totalScore);
    winLose();
    console.log(totalScore);
});

$("#pink").click(function () {
    totalScore += pinkNum;
    $("#totalScore").html(totalScore);
    winLose();
    console.log(totalScore);
});

$("#orange").click(function () {
    totalScore += orangeNum;
    $("#totalScore").html(totalScore);
    winLose();
    console.log(totalScore);
});

$("#blue").click(function () {
    totalScore += blueNum;
    $("#totalScore").html(totalScore);
    winLose();
    console.log(totalScore);
});

// $("#totalScore").html();

// Win / lose function 

// If total score from player matches random number generated, win totals increment and game resets
function winLose() {
    if (totalScore == randNum) {
        wins++;
        $("#winTotal").html(wins);
        resetGame();
    }

    // If total score from player doesn't match the random number generated, loss totals increment and game resets
    if (totalScore >= randNum) {
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
    $("#totalScore").html(totalScore);
    initGame();
}

// Function to reset game when clicking button

function reset() {
    randNum = Math.floor(Math.random() * 101 + 19);
    purpleNum = Math.floor(Math.random() * 11 + 1);
    pinkNum = Math.floor(Math.random() * 11 + 1);
    orangeNum = Math.floor(Math.random() * 11 + 1);
    blueNum = Math.floor(Math.random() * 11 + 1);
    totalScore = 0;
    wins = 0;
    losses = 0;
    $("#totalScore").html(totalScore);
    $("#winTotal").html(wins);
    $("#lossTotal").html(losses);
    initGame();
}

// Ready function
$(function () {

    initGame();

    $("#reset").click(function () {
        reset();
        alert("Restarting game!");
    });
        
});
