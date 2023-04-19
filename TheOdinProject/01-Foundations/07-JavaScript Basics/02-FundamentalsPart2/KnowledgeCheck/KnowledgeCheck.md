#### Knowledge Check

  #####  What are the eight data types in JavaScript?
    Nmumber, BigInt, String, Boolean, null, undefined, object, and Symbol

  #####  Which data type is NOT primitive?
    Object

  #####  What is the relationship between null and undefined?
    Null literally represents nothing, as in you know explicitly there is nothing. While undefined is something that is there but there is not currently assigned value.

    Undefined is not knowing how much money is in my bank account. Null is going to check on how much money is there, then discovering I never opened one in the first place.

  #####  What is the difference between single, double, and backtick quotes for strings?
    Single and double quotes work the same way. Backticks are what's called a template literal, which allows you to insert javascript variables into the string itself using ${} between the backtics.

  #####  What is the term for joining strings together?
    Concatenation

  #####  Which type of quote lets you embed variables/expressions in a string?
    Backtics ``

  #####  How do you embed variables/expressions in a string?
    `${}` || '' + variable

  #####  How do you use escape characters in a string?
    'Needing to use quote\'s inside of a string with quotes' the escape character tells the interpreter/browser, that this particular quote isn't the close of the string.

  #####  What is the difference between the slice/substring/substr string methods?
    Slice tells you what index to start and end from and can count backwords from the end using negatives.  
    Substring is the same as slice, except there are no negatives, negatives are interpreted as a zero.  
    Substr says what index to start from and how many characters to grab after that, instead of specifying the end point with a specific index number.

  #####  What are the three logical operators and what do they stand for?
    || Or -  Which looks for the first truthy value  
    && And - Which looks for the first falsy value  
    ! not - This flips the truthy or falsy indication of a value  

  #####  What are the comparison operators?
    <, >, ==/===

  #####  What are truthy and falsy values?
    Values in JavaScript are converted when being compared, anything with value is truthy and anything with no value (0, '', null, undefined, NaN) is falsy.

  #####  What are the falsy values in JavaScript?
    (0, '', null, undefined, NaN)

  #####  What are conditionals?
    These are blocks of code that only run if certain criteria are met. 

  #####  What is the syntax for an if/else conditional?
    ```javascript  
      if (condition) {
        execute
      } else {
        execute
      }
    ```

  #####  What is the syntax for a switch statement?
    ```javascript  
      switch (variable) {
        case 'thing1';
          console.log(doThing1);
          break;

        case 'thing2';
          console.log(doThing2);
          break;

        case 'thing3';
          console.log(doThing3);
          break;
                
        default;
          console.log(doDefaultThing);
          break; 
      }
    ```

  #####  What is the syntax for a ternary operator?
    ```javascript
    condition ? doThingIfTrue : doThingIfNotTrue;
    ```

  #####  What is nesting?
    Nesting is when you put things inside of your block statements, which you can thing have another block with it's own set of conditons.