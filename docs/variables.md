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

  