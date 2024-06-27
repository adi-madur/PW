/*Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.*/

const items = {
  apple: 1.99,
  banana: 0.99,
  orange: 2.49,
  grape: 3.99,
};

const exchangeRate = 80;

const itemsInRupees = Object.fromEntries(
  Object.entries(items).map(([item, price]) => [
    item,
    (price * exchangeRate).toFixed(2),
  ])
);

console.log(itemsInRupees);
