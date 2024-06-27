// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

function addNumbers(n1, n2) {
  console.log(sum);
  var sum;
  sum = n1 + n2;
  return sum;
}

console.log(addNumbers(5, 6));
