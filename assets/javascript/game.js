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

}

$("#blue").click(function() {
    userTotal += blueCrystal;
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
    userTotal += whiteCrystal;
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



})

