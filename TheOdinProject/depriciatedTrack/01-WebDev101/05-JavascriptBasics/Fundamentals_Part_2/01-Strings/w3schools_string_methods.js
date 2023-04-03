// Length Method - Tells you the character length of a string
  var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var sln = txt.length;

  console.log("The alphabet is " + sln + " letters long") 

// indexOf() method - tells you the start position of the first occurance you've inserted into the argument of indexOf() method
  var str = "Please locate where 'locate' occurs!";
  var pos = str.indexOf("locate");

  console.log("The first occurance of locate starts at the " + pos + " index")

// lastIndexOf() tellyou the start postition of the last occurance of your argument
  var str_2 = "Please locate where 'locate' occurs!";
  var pos_2 = str_2.lastIndexOf("locate");

  console.log("The last occurance of locate starts at the " + pos_2 + " index")

// If nothing is found with the methods lastIndexOf() or indexOf() then the methods return a -1
  var str_3 = "Please locate where 'locate' occurs!";
  var pos_3 = str_3.lastIndexOf("John");
  var pos_4 = str_3.indexOf("John");

  console.log("lastIndexOf() returns " +  pos_3 + " when no value is found")
  console.log("indexOf() returns " +  pos_4 + " when no value is found")

// You can also input a second argument for the method to start from a specific Index
  var str_4 = "Please locate where 'locate' occurs!";
  var pos_5 = str.indexOf("locate", 15);
  var pos_6 = str.lastIndexOf("locate", 15);

  // I looked up String iterpolation because concatenation is annoying.
    console.log(`Index '${pos_5}' is the postiion of the first occurance of 'locate' starting after index of 15`)

    // Also of note is that lastOfIndex() counts backwards from 15 instead of forward.
    console.log(`Index '${pos_6}' is the postiion of the last occurance of 'locate' starting after index of 15`)

// The search() is a way to find a specific string you input into the argument
  var search_str = "Please locate where 'locate' occurs!";
  var search_pos = search_str.search("locate");

  console.log(search_pos)

  // Something to note indexOf() & search() return the same result in this instance, however you can't use a 2nd argument for a start postion inside of search. You then have the ability to get really specific by using what's called a regular expression to find what you need.


// The slice() method allows you to cust out a portion of a string. You can then store this into a new variable.
  var slice_str = "Apple, Banana, Kiwi";
  var slice_res = slice_str.slice(7, 13);

  console.log(slice_res)

  // You can skip the 2nd argument and slice() will grap everything from the start position you selected
    var slice_res2 = slice_str.slice(7)

    console.log(slice_res2)

  // Or you can make it clip backwards from the end - Note - Does not work on IE8 & earlier version (IE sucks anyway, who cares.)
    var slice_res3 = slice_str.slice(-12)

    console.log(slice_res3)

// I went through the rest of the methods. The webpage of https://www.w3schools.com/js/js_string_methods.asp is bookmarked for reference.