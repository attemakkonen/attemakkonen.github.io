function getRandomInteger(min, max) {
    return Math.floor(Math.random() * max + min);
}

var guessNumber = getRandomInteger(1, 10);

function compareNumbers(first, second) {
    if(first == second) {
        return true
    } else {
        return false
    }
}

window.onload=function(){

document.getElementById("button").addEventListener("click", function guessTheNumber(){
var arvo = document.getElementById("number").value
if(arvo % 1 == 0) {  
 if(compareNumbers(guessNumber, arvo)) {
     alert("You won!")
     guessNumber = getRandomInteger(1, 10)
 } else {
        alert("Try again.")
    }

} else {
    alert("Syötetty luku ei kelpaa.")
}
});
}