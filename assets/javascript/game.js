$( document ).ready(function(){

var targetNumber = Math.floor(Math.random()*101+19);
$('#target').text(targetNumber);

var userTotal = 0;
$('#total').text(userTotal);

var blueCrystal = Math.floor(Math.random()*12+1);
console.log(blueCrystal);
$("#blue").add;

var orangeCrystal = Math.floor(Math.random()*12+1);
console.log(orangeCrystal);
$(orangeCrystal).addClass("#orange");

var purpleCrystal = Math.floor(Math.random()*12+1);
console.log(purpleCrystal);
$(purpleCrystal).addClass("purple");

var whiteCrystal = Math.floor(Math.random()*12+1);
console.log(whiteCrystal);
$(whiteCrystal).addClass("#white");


var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);


$("#blue").click(function() {
    console.log("clicked");
    userTotal += blueCrystal;
    $("#total").text(userTotal);
});

$("#orange").click(function() {
    console.log("clicked");
    userTotal += orangeCrystal;
    $("#total").text(userTotal);
});

$("#purple").click(function() {
    console.log("clicked");
    userTotal += purpleCrystal;
    $('#total').text(userTotal);
});

$("#white").click(function() {
    console.log("clicked");
    userTotal += whiteCrystal;
    $('#total').text(userTotal);
});


if (userTotal === targetNumber){
    wins ++;
    $("wins").text(wins);
    //run reset function here
}
else if (userTotal > targetNumber) {
    losses ++;
    $('#losses').text(losses);
    //runreset function here
}

})

