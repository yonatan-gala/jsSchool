// BATLESHIP GAME
// GAMEPLAY:
// find the location of the battle ships within the Grid.
// grid is a number range, currently hardcoded to 50. (we have only an X axis).
// size of a ship is hard coded (currently 3).
// number of ships is hard coded (currently 3).
// if a ship is hit 3 times it sinks.

// LOGICAL FLOW:
// 1.position the ships randomly in the Grid.
// 2.when a guess is submitted check for hits.
// 3.when a ship is hits, notify hit.
// 4.after all the ship is hit, notify that it is hit.
// 5.when all ships are hit. game is over, give accuracy stats.

// Functions:
// 1. GridControl:
//    1.position ships randomly in grid. minimum distance is 1
//    2.get guesses and check if a ship is hit.
// 2. CreateShip:
//    1.create a ship object position.
//    2.update hits.
//    3.update if sunk.
// 3. messages.
//    1.hit
//    2.miss
//    3.ship is sunk
//    4.all ships are sunk.
// 4. points
//    1. stats accuracy.
//    2. points per accuracy.
"use strict";

const gridRange = 10;
const shipSize = 3;
const shipsNumber = 1;

let currentGuess;
let guesses = 0;

function messages() {
    let validRangeMessage = "Ready, aim, fire!, enter a number from 0-" + guessRange;
    let nonValidRangeMessage = "Please enter a valid cell number!";
    let hitMessage = "Shit i am hit";
    let missMessage = "Looser";
    let successMessage = "You sank my battleship!";
}

// available range for the ship to be in.
// Grid
function GridControler(gridRange) {
    let gridRangeArray = [];
    // 1. creates grid array
    for (let i = 0; i < gridRange; i++) {
        gridRangeArray[i] = null;
    }
    // This is better..=>
    // new Array(gridRange);
    // 2.position ship
    // create random start point from range - size.
    let shipLocation = Math.floor(Math.random() * (gridRange - shipInGrid.size));
    let shipsInGrid = [new CreateShip(shipSize)];
    // send location to ships.
    shipsInGrid.forEach(function(ship){
        ship.locationInGrid([])
    });
   // currentGuess= Math.floor(Math.random() * (gridRange));

    console.log(gridRangeArray);
    console.log(shipsInGrid);
    //console.log(randomLoc);
}

function CreateShip(shipSize){
    const battleShipObject = {
        size: 3,
        isSunk: false,
        hit: 0,
        health :[]
    } ;
    for (let i=0; i<battleShipObject.size;i++){
        battleShipObject.health[i] = false;
    }

    var gridPoints;
    // method
    function locationInGrid(_gridPoints) {
        gridPoints = _gridPoints
      console.log(_gridPoints);
    }

    // method to save ship position in grid.
    // {put this here}
    return {
        battleShipObject: battleShipObject,
        locationInGrid: locationInGrid
    };
}

// ActivateFunctions
let grid = new GridControler(gridRange);












//
//
//
//
// function startGame() {
//     while (isSunk == false) {
//         GridControler(gridRange, shipSize);
//     }
//     console.log("End Of GAME");
//
// }
//
//
// function getGuessInput() {
// }
//
//
//
// function BattleShipClass() {
//     let battleShipObject = {
//         size: 3,
//         startPosition: "", // this is from the
//     }
// }
//
//
// // GAME definition
// // the game is run from a function
// // the numver of possible locations is a parameter.
//
// // function myBattleShip(){
// //     // variables
// //     // guess is defined but not initialized.
// //     // it is initialized within the loop
// //     let guess;
// //     let guessRange;
// //     let hits = 0;
// //     let guesses = 0;
// //     guessRange = value;
// //     // locations are set in advance
// //     // create them randomly within a range.
// //     // todo, play with arrays here
// //     let randomLoc = Math.floor(Math.random() * (guessRange - 2));
// //     let location1 = randomLoc;
// //     let location2 = location1 + 1;
// //     let location3 = location2 + 1;
// //
// //
// //     // gridController
// //     // 1. manage the axis , what is taken what is not.
// //     // 2. knows the get sizes of ships and to put them accordingly to available space
// //    //  3. know the get a grid point and check if:
// //           // a. do i have this point in the range
// //           //
// //     let gridControler = {},
// //
// //
// //         // battleShipClass
// //     // 1. make battleships.
// //     // 2. make ship size known
// //
// //     // battleShip object instance of battleShipClass
// //     let battleShipObject = {
// //         size: 3,
// //         position: [randomLoc, randomLoc +1, randomLoc +2],
// //         // dynamic
// //         hit: [randomLoc, randomLoc +1, randomLoc +2],
// //         isSunk: ()=> {
// //             // check hits, if all of them are hit, then ship is sunk.
// //         }
// //     }
// //
// //     while (isSunk == false) {
// //         // todo: create input field  to switch the pormpt
// //         guess = prompt(validRangeMessage);
// //         if (guess < 0 || guess > guessRange) {
// //             alert(nonValidRangeMessage); } else {
// //             // only when we have valid number we actually start the logic
// //             // first incrementing guesses
// //                 guesses++;
// //                 // then checking guesses
// //                 if (guess == location1 || guess == location2 || guess == location3) {
// //                     alert(hitMessage);
// //                     hits = hits + 1;
// //                     // 3 hits = win , breaks the loop.
// //                     if (hits == 3) {
// //                         battleShipObject.isSunk = true;
// //                         alert(successMessage); }
// //                 } else {
// //                     alert(missMessage);
// //                     // loop continues
// //                 }
// //             }
// //     }
// //     // feed back is outdise the loop
// //     // in order for 'guesses' to be accurate stats should be after the definition
// //     // and after the loop
// //     let stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
// //     alert(stats);
// // }
// //
// // //entry points
// // // 1. size of grid
// // // 2.
// // myBattleShip(10);
// //
// //
// //
// // // TBD
// // // starting point for my array.
// // // locations
// // // we have to create an array strting at location1 and incrementing by 1.
// // // length of array is size.
// // // var arr = [];
// // ////for (var i = yearStart; i < yearEnd+1; i++) {
// //   //  arr.push(i);
// // //}
// //
// // //  let locations = [0, 0, 0 ,0 ,0 ,2 ,2 ,2 ,0 ,0]
// // //   function createLocation(){
// //
// //
// //
// // // create an Array within gridControler
// // // new Array(range)
// //
// //
// // // [0,1,2,...range -1]
// // // any input is decresed by 1
// //
// //
//
// //
// // New GridControler(20, ships)
// //
// //
// // // creating ships...
// //
// //
// //
// //
// // //
