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

logical order example
````
function orderMyLogic(val) {
// is it greater or eaqul to 10
  if (val >= 10) {
       return "Greater than or equal to 10";
  } 
  // is it greater then 5;
  else if (val >= 5) {
     return "Less than 10";
  
  } else {
     return "Less than 5";
  }
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

#### logical operators: 
Or : (num > 10 || num < 5)
And : (num > 5 && num < 10) 


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
    // default is defined diffrantly, and serves like an else statement
  default:
    defaultStatement;
    break;
}
````
you can combine cases
````
  case value1:
  case value2:
  case value4:
   statement
   break;
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
good when we do not know how many iteration we have.
not good if condition is permanant, becuase it create and infinit loop.
````
while (condition) do ... 
````

### true/false returns
we can use parameters for true/false returns.
````
function isLess(a, b) {
  return a < b;
}
````
isLess(10, 15) will return true.
