// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
let total = 0;
const printSquareNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    let sqr = i * i;
    console.log(`Square of ${i} is ${sqr}`);
    total += i * i; // Add the square of the current number to the total
    console.log(`Total of all the squares are ${total}`);
  }
}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55
