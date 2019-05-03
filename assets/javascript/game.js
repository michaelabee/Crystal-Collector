$( document ).ready(function(){

var targetNumber = Math.floor(Math.random()*101+19);
$('#target').text(targetNumber);

var userTotal = 0;
$('#total').text(userTotal);

var blueCrystal = Math.floor(Math.random()*12+1);
console.log(blueCrystal);

var orangeCrystal = Math.floor(Math.random()*12+1);
console.log(orangeCrystal);

var purpleCrystal = Math.floor(Math.random()*12+1);
console.log(purpleCrystal);

var whiteCrystal = Math.floor(Math.random()*12+1);
console.log(whiteCrystal);

var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);

var reset = function(){
    userTotal = 0;
    $('#total').text(userTotal);
    targetNumber = Math.floor(Math.random()*101+19);
    blueCrystal = Math.floor(Math.random()*12+1);
    console.log(blueCrystal);
    orangeCrystal = Math.floor(Math.random()*12+1);
    console.log(orangeCrystal);
    purpleCrystal = Math.floor(Math.random()*12+1);
    console.log(purpleCrystal);
    whiteCrystal = Math.floor(Math.random()*12+1);
    console.log(whiteCrystal);
    $('#target').text(targetNumber);

    console.log("tn2", targetNumber)
    console.log("usertotal2", userTotal)
}

$("#blue").click(function() {
    console.log("clicked");
    userTotal += blueCrystal;
    console.log("clickedtotal", userTotal)
    $("#total").text(userTotal);
    if (userTotal === targetNumber){
        wins++;
        $("#wins").text(wins);
        reset();
    }
    if (userTotal > targetNumber){
        console.log("tn1", targetNumber);
        console.log("usertotal", userTotal)
        losses++;
        $("#losses").text(losses);
        reset();

    }

});

$("#orange").click(function() {
    console.log("clicked");
    userTotal += orangeCrystal;
    $("#total").text(userTotal);
    if (userTotal === targetNumber){
        wins++;
        $("#wins").text(wins);
        reset();
    }
    if (userTotal > targetNumber){
        losses++;
        $("#losses").text(losses);
        reset();
    }
});

$("#purple").click(function() {
    console.log("clicked");
    userTotal += purpleCrystal;
    $('#total').text(userTotal);
    if (userTotal === targetNumber){
        wins++;
        $("#wins").text(wins);
        reset();
    }
    if (userTotal > targetNumber){
        losses++;
        $("#losses").text(losses);
        reset();
    }
});

$("#white").click(function() {
    console.log("clicked");
    userTotal += whiteCrystal;
    $('#total').text(userTotal);
    if (userTotal === targetNumber){
        wins++;
        $("#wins").text(wins);
    }
    if (userTotal > targetNumber){
        losses++;
        $("#losses").text(losses);
    }
});



})

