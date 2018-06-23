//log every number from 0 to 100, including 0 and 100. But if the number is evenly divisible by 3 log 'fizz' instead, if the number is evenly dividible by 5 log 'buzz' instead, if the number is evenly dividible by either 3 and 5 log 'fizzbuzz'. If it is not evenly divisible by either 3 or 5 log the number.



for (var i = 0; i < 101; i++) {

  if (i%3 ==0 && i%5 == 0) {
  console.log(' FizzBuzz');
  }

  else if (i%3 == 0) {
  console.log(' fizz');
  }

  else if (i%5 == 0) {
  console.log(' buzz');
}
  else {
    console.log(i);
  }
}
