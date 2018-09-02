# variables: 
- variables should be declared.
- variables should be assigned. (initilized).
- variables can be global or scoped.
- variables are assigned a memory slot before they are proccessed (HOISTING), this leeds to 'undefined' if they are called before they are initilized.

## variables can be:
- num
- string (with single/double qoutes);
- Boleans

## Conventions:
- never start with a number
- never use key words
- use camelCase

## Variables can hold:
- variables types
- operators and methods
- objects

## Syntax: 
- declare:
  - var varNAme;
- assign:
  - when declared --> var varName = "myVarName";
  - seperatly -->
    varName= "myVarName"; 
- global : 
  - myVarName
- scope: var myVarName , within a function.
- Incrament, decrement: variableName+=,*=,/=,++, --,
  - E.g : 
  var myVar = 87;
  myVar++;
  
  Operators: 
  =,-,/,*,% (reminder)
  
  Strings: 
  - use qoutes
  - when there are quotes within the strings content use \
    - var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
    - you can mix it so single qoutes will define the string and double qoutes will be in the content, then no \ is needed.
  - Escape Sequences in Strings
    - single qoute \'
    - double qoutes \"
    - backslash \\ 
    - \n newline
    - \r carraige return
    - \t tab
    - \b backspace
    - \f form feed
  - strings can be concatinated: string + string, spaces should be added to string..    

## Properties:  
- .length : Returns the length of a string.
- .constructor : Returns the string's constructor function, E.g: Number, String, Bolean
- .prototype: Allows you to add properties and methods to an object !TODO: still need to sharpen this later.


typeof value returns: 'number','string', 'boolean'.

### working with strings
- bracket notation: [], a way to get a character at a specific index within a string.
- you cannot alter part of strings by []; individual characters of a string literal cannot be changed;
- stringName[stringName.length -1] : getting last charachter.
### arrays
The Array object is used to store multiple values in a single variable.
var cars = ["Saab", "Volvo", "BMW"];

#### Properties:
- constructor: Returns the function that created the Array object's prototype.
- length: Sets or returns the number of elements in an array.
- prototype: Allows you to add properties and methods to an Array object.

#### Methods: by order of application curve.
- concat(): Joins two or more arrays, and returns a copy of the joined arrays :var concactArray = str1.concat(str2,str3...);

- pop(): Removes the last element of an array, and returns that element
- push(): Adds new elements to the end of an array, and returns the new length
- shift(): Removes the first element of an array, and returns that element
- unshift(): Adds new elements to the beginning of an array, and returns the new length
- splice(): Adds/Removes elements from an array

- slice(): Selects a part of an array, and returns the new array
- toString(): Converts an array to a string, and returns the result
- valueOf(): Returns the primitive value of an array

- copyWithin(): Copies array elements within the array, to and from specified positions
- entries(): Returns a key/value pair Array Iteration Object
- every(): Checks if every element in an array pass a test
- fill(): Fill the elements in an array with a static value
- filter(): Creates a new array with every element in an array that pass a test
- find(): Returns the value of the first element in an array that pass a test
- findIndex(): Returns the index of the first element in an array that pass a test
- forEach(): Calls a function for each array element
- from(): Creates an array from an object
- includes(): Check if an array contains the specified element
- indexOf(): Search the array for an element and returns its position
- isArray(): Checks whether an object is an array
- join(): Joins all elements of an array into a string
- keys(): Returns a Array Iteration Object, containing the keys of the original array
- lastIndexOf(): Search the array for an element, starting at the end, and returns its position
- map(): Creates a new array with the result of calling a function for each array element
- reduce(): Reduce the values of an array to a single value (going left-to-right)
- reduceRight(): Reduce the values of an array to a single value (going right-to-left)
- reverse(): Reverses the order of the elements in an array
- some(): Checks if any of the elements in an array pass a test
- sort(): Sorts the elements of an array
