// BATLESHIP GAME
// purpose of the game is to find the location of the battle ship within a number range.
// size of the ship is hard coded (currently 3), so the numbers we have to guess is from start to finish.
// e.g: if we have a range of 6 and we start at 3. when we guess 3,4,5 we sink the ship.
// after ship is sunk we give feedback on size/guesses ratio for accuracy.

// Known issues:
// 1. size should be dynamic from a range.
// 2. if you hit the same value 3 times you sink the ship.
// todo: this can be fix if we create an array for locations.
// size should be random from a range then passed to location.

// variables
// guess is defined but not initialized.
// it is initialized within the loop
let guess;
let guessRange;
let hits = 0;
let guesses = 0;
let isSunk = false;

// Features: you can define a range for 'sea size'

// GAME definition
// the game is run from a function
// the numver of possible locations is a parameter.
function myBattleShip(value){
    guessRange = value;
    // messages:
    let validRangeMessage = "Ready, aim, fire!, enter a number from 0-" + guessRange;
    let nonValidRangeMessage = "Please enter a valid cell number!";
    let hitMessage ="Shit i am hit";
    let missMessage ="Looser";
    let successMessage= "You sank my battleship!";
    // locations are set in advance
    // create them randomly within a range.
    // todo, play with arrays here
    var randomLoc = Math.floor(Math.random() * (guessRange - 2));
    var randomSize = Math.floor(Math.random() * (guessRange - 2));
    let location1 = randomLoc;
    let location2 = location1 + 1;
    let location3 = location2 + 1;
    while (isSunk == false) {
        guess = prompt(validRangeMessage);
        if (guess < 0 || guess > guessRange) {
            alert(nonValidRangeMessage); } else {
            // only when we have valid number we actually start the logic
            // first incrementing guesses
                guesses++;
                // then checking guesses
                if (guess == location1 || guess == location2 || guess == location3) {
                    alert(hitMessage);
                    hits = hits + 1;
                    // 3 hits = win , breaks the loop.
                    if (hits == 3) {
                        isSunk = true;
                        alert(successMessage); }
                } else {
                    alert(missMessage);
                    // loop continues
                }
            }
    }
    // feed back is outdise the loop
    // in order for 'guesses' to be accurate stats should be after the definition
    // and after the loop
    let stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
    alert(stats);
}
myBattleShip(10);



// TBD
// starting point for my array.
// locations
// we have to create an array strting at location1 and incrementing by 1.
// length of array is size.
// var arr = [];
////for (var i = yearStart; i < yearEnd+1; i++) {
  //  arr.push(i);
//}

//  let locations = [0, 0, 0 ,0 ,0 ,2 ,2 ,2 ,0 ,0]
//   function createLocation(){
