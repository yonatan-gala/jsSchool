// Counting card functions.
// a nice example for seperating the evaluation and retruns.

// low values increase count and outputs Bet
// hight Values decrese count and output Hold

function cc(card) {
   // we evaluate use cases and change the count variable.
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    // here we have return output based on the values we evaluated
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

// calling the function to test it
cc(2);

