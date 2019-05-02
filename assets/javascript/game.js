$( document ).ready(function(){

var targetNumber = Math.floor(Math.random()*101+19);
$('#target').text(targetNumber);

var userTotal = 0;
$('#total').text(userTotal);

var blueCrystal = Math.floor(Math.random()*18+1);
console.log(blueCrystal);
$(blueCrystal).addClass("#blue");

var orangeCrystal = Math.floor(Math.random()*18+1);
console.log(orangeCrystal);
$(orangeCrystal).addClass("#orange");

var purpleCrystal = Math.floor(Math.random()*18+1);
console.log(purpleCrystal);
$(purpleCrystal).addClass("purple");

var whiteCrystal = Math.floor(Math.random()*18+1);
console.log(whiteCrystal);

//$(whiteCrystal).addClass("#white"); (is this how I assign the html class tag to this variable)?


var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);


if (userTotal === targetNumber){
    wins ++;
    //run reset function here
}
else if (userTotal > targetNumber) {
    losses ++;
    //runreset function here
}

})
