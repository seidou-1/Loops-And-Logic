//Create a function that will test what we pass to it to see if it's a palindrome. If true, return.. if false return,

function checkForPalindrome(str){
  var tester = str;
  tester = tester.split(""); //what about the object? oh split it.
  tester = tester.reverse(); //what about the object? oh reverse it.
  tester = tester.join(""); //what about the object? oh join it.

  if (tester === str) {
    return true;
  } else {
    return false;
  }
}

checkForPalindrome ('bobo');



//*************Array methods********************

var myArr = [1,2,3,4,5,6,7,8];
//Returns how many elements are within the array
myArr.length

//Returns the last element within the Array

myArr[myArr.length - 1];



//This prints out i for each thing that is within an array
for (var i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}