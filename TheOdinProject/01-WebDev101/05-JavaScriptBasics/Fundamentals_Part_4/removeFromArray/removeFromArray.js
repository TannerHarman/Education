const removeFromArray = function (...args) {

  const array = args[0];
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }

  });

  return newArray;
};

module.exports = removeFromArray

// I had to look up the solution for this one because I couldn't figure out how this was working. So I'll break down how it's working as I understand it.

// We break down the first argument and store it inside the array variable. like so

//    -  const array = args[0]; | Reults in: array = [1, 2, 3, 4]

//  Then we create a new array to store the new array that we've run through the function.

//    - const newArray = []; | Results in | newArray = [];

// This is where things were fuzzy before so I broke each part of the function up into different peices to watch the output inside the console. 

// array.forEach(item) runs through the array and grabs each value from the array and stores it in the iterator variable of 'item'. 

// Then we take that value in item and compare it to the original arguments. So the first number from the array is compared to each argument in the parent function. 

// Example 
    // if (!args.includes(item)) literally translates to...
        // does [1, 2, 3, 4] or 3 equal 1? 
          // the anwer is no, so we add 1 to the New Array with newArray.push(1)

    // The forEach function will do this for every value within the stored array.

        // does [1, 2, 3, 4] or equal 2
          // the anwer is no, so we add 1 to the New Array with newArray.push(2)

        // does [1, 2, 3, 4] or equal 3
          // // the anwer is yes, so we skip adding this because the arguments do include a 3

        // does [1, 2, 3, 4] or equal 4
          // the anwer is no, so we add 1 to the New Array with newArray.push(4)

      // The exclemation point in !args.includes(item) is what causes the value to be added to the new array if there is no match. 