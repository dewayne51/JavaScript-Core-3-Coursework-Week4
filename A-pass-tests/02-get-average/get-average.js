// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numbersArray = numbers.filter((elt) => typeof elt === "number");
  return numbersArray.reduce((num, sum) => sum + num) / numbersArray.length;
}
module.exports = average;
