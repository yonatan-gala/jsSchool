// defining variables for count value and object that we count
var word = "bottles";
var count = 1;
// a simple while loop to iterate as long as count is > 0
// per this examples as long as we have bottles
while (count > 0) {
  // song lyrics ,3 lines of textm using the document.write method.
  document.write(count + " " + word + " of beer on the wall" + "<br>" );
  document.write(count + " " + word + " of beer," + "<br>");
  document.write("Take one down, pass it around," + "<br>");
  // decresing by 1
  count--;
  // now after we decresse we check if any bottles are left
  // we want to give feedback accordingly.
  // its a simple condition, either we have n-1 bottles or we do not have bottles
  if (count > 0) {
    // n -1 bottles are left
     document.write(count + " " + word + " of beer on the wall." + "<br>");
  } else {
    // not bottles are left.
     document.write("No more " + word + " of beer on the wall." + "<br>");
  }
}

//todos:
// 1 render elements in DOM.
// 2 create a button to change state.
// 3 decress bottles with button press
// 4 change elements in DOM
// 5 make message within container
// 6 add styles.

