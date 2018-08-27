# CONDITIONALS 
if, while, for, switch cases

## objectives
when condition is met something happens. 
there are several differant formats for defining a condition. 
it depends whether conditions are known in advance and the nature of the conditions.


### if statement 
````
if (condition is true) {
  statement is executed
}
````
setting what happens if condition is not met and setting a new condition
````
else if(condition) {
   statement is executed
}
````
setting what happens if no condition is met
````
else {
   statement is executed
}
````
We can chain 'if' statments
````
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
````

### Switch statment 
instead of chaining 'if statement , gives better structure.
we usually do it when the avilable options are specified and have clear assignments
````
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
...
  default:
    defaultStatement;
    break;
}
````

### LOOPS
a condition that is checked again and again against until it does not apply.

### For loops
good for increcments, decresments scenarios.
For loops are declared with three optional expressions separated by semicolons:
for (initialization; condition; final-expression)
````
var ourArray = [];
for (var i = 0; i < 5; i++) {
  statement is executed;
}
````

### a while loop
a loop that runs while a condition is met
````
while (condition) do ...
````


