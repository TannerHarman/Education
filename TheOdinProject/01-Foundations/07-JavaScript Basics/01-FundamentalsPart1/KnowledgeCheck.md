#### Knowledge Check
 
  #####  Name the three ways to declare a variable
    let, const, var

  #####  Which of the three variable declarations should you avoid and why?
    var is the one to avoid. It's was once the only way to declare a variable, and behaves similarly to let, but because it's a legacy decloration, some of it's behaviors don't align perfectly.

  #####  What rules should you follow when naming variables?
    You can only use letters, digits, or specific Symbols $ and _ for variable names. However, the first character cannot be a digit (number).

  #####  What happens when you add numbers and strings together?
    It will treat the numbers like strings and concat them together.  
    ie: '2' + 2 = 22.

  #####  How does the Modulo (%), or Remainder, operator work?
    If you're dividing one number into another, this operator will calculate the division and leave you the leftover of what couldn't be divided.  
    ie: 10 % 3 = 1 | 3 * 3 = 9 | 10 - 9 = 1 | or... 10 - 3 -3 -3 = 1

  #####  Explain the difference between == and ===.
    == will convert a string into a number then compare them to see if they're equal. It will return true in the example '3' == 3.  
    === will take the raw values and compare them. It will return false in the example '3' === 3.

  #####  When would you receive a NaN result?
    It's the result of trying to do math with things that aren't numbers.  
    ie: 19 + 'Susan' = NaN.

  #####  How do you increment and decrement a number?
    1++ increment
    1-- decrement

  #####  Explain the difference between prefixing and postfixing increment/decrement operators.
    prefix immediatly returns the new value while postfix immediatly returns the previous value before the operation.

  #####  What is operator precedence and how is it handled in JS?
    It's the priority of operations that you learn in basic math. PEDMAS. Javascirpt assigns each operator a number and the lower number gets priority over the higher one to complete the equation.

  #####  How do you access developer tools and the console?
    Right click or Use the keyboard shortcut, click inspect, then click console.

  #####  How do you log information to the console?
    console.log();

  #####  What does unary plus operator do to string representations of integers? eg. +”10”
    It converts a the variable into a number. Same as Number('').