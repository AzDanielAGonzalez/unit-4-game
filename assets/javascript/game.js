//4 Crystals are displayed as buttons on page
//The user will be given a random number to start off the game
//When user clicks on crystal, it will add a value to their total score
//Crystal has unknown value, until clicked
//As user clicks crystals, it increase the users total score
//User wins if their total score matches the random number
//Game restarts if the player wins or looses
//When game resets, new random number is generated, and all crystals are assigned a new value, and user total score resets
//App needs to show number of wins and losses, it should reset without a page refresh

$(document).ready(function () {

var losses= 0;
var wins= 0;
var userTotal= 0;


$('#numberWins').text(wins);

$('#numberLosses').text(losses);

$('#finalTotal').text(userTotal);

var Random=Math.floor(Math.random()*101+19)


$('#randomNumber').text(Random);


var num1= Math.floor(Math.random()*11+1)
console.log(num1)
var num2= Math.floor(Math.random()*11+1)
console.log(num2)
var num3= Math.floor(Math.random()*11+1)
console.log(num3)
var num4= Math.floor(Math.random()*11+1)
console.log(num4)
});

function reset(){

    Random=Math.floor(Math.random()*101+19);

    console.log(Random)

    $('#randomNumber').text(Random);

    num1= Math.floor(Math.random()*11+1);

    num2= Math.floor(Math.random()*11+1);

    num3= Math.floor(Math.random()*11+1);

    num4= Math.floor(Math.random()*11+1);

    userTotal= 0;

    $("#finalTotal").text(userTotal);

    } 

function win(){
    alert("You Win!");
    wins++;
    ("#numberWins").text(wins);
    reset()
}

function looser(){
    alert("You Lose, try again!");
    losses++;
    ("#numberLosses").text(losses);
    reset()
}

$("#one").on('click', function(){

    userTotal = userTotal + num1;

    console.log("New userTotal= "+ userTotal);

    $("#finalTotal").text(userTotal); 

        if (userTotal == Random){

          win();

        }

        else if (userTotal > Random){

          loser();

        }   

  }) 

  $("#two").on ('click', function(){

    userTotal = userTotal + num2;

    console.log("New userTotal= " + userTotal);

    $("#finalTotal").text(userTotal); 

        if (userTotal == Random){

          win();

        }

        else if (userTotal > Random){

          loser();

        }   

  }) 

  $("#three").on ('click', function(){

    userTotal = userTotal + num3;

    console.log("New userTotal= " + userTotal);

    $("#finalTotal").text(userTotal); 

        if (userTotal == Random){

          win();

        }

        else if (userTotal > Random){

          loser();

        }   

  }) 

  $("#four").on ('click', function(){

    userTotal = userTotal + num4;

    console.log("New userTotal= " + userTotal);

    $("#finalTotal").text(userTotal); 

        if (userTotal == Random){

          win();

        }

        else if (userTotal > Random){

          loser();

        }   

  });
