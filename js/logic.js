var myNum = 0;

//if statements test to see if the expression nested withing the () evaluates to *truthy*. If it does, ti performs the code nested within the following {}. If it does not, no action is taken by default.

if (myNum > 5) { //If whatever is in the parenthesis is *truthy*, execute the code in the brackets
  // console.log(myNum + ' is greater than 5');
} //if statements do not have semicolon's at the end


//single equal sign assigns a value. Triple equal signs is an exact comparison
//else statements are not required though they can be set to perform some default action if the if statement evaulates to false
if (myNum ===5) {
  // console.log(' myNum is currently set to 5');
} else {
  // console.log(' my num is currently not 5');
}

//else if statemetns can be added on to if statements to perform additional logic tests if the previous if or else if statements evaluate to false

//once it hits a condition that is true, it will stop and not evaluate anything else
if (myNum > 0) {
  console.log(' myNum is greater than zero');
} else if (myNum < 0) {
  console.log(' myNum is less than zero');
} else {
  console.log(' myNum is either 0 or is not a number');
}

if (1) {
  console.log(' 1 is truthy');

}
