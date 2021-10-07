# Task:
Create a function that receives the array of goods and returns the cost that should be paid for all these goods.
## Your code should:
- Validate the data according to the following rules: item: string,  type: string, weight: number, quantity: number, pricePerKilo: `“$” + number` - string,  pricePerItem: `“$” + number` - string
- Print to the console the total quantity of all watermelons (`Watermelons - ${quantity}`);
- Print to the console the total weight of all apples (`Apples - ${weight}`);
- Sort the array in alphabetical order by item field and print it to the console;
- Sort the array by cost of the record and print it to the console;
- Print to the terminal the type of oranges with the least price (`The cheapest orange type is: ${type}`);
- Print to the console the cost of the goods by item name (`Apples - ${costApples}, Pineapples - ${costPineapples}, Watermelons - ${costWatermelons}, Oranges - ${costOranges}`);
- Print to the console the result of the execution of this function.

> Note: Try to minimize your code.

#### Input array in JSON format:
```sh
[
  {"item":"apple","type":"Fuji","weight":10,"pricePerKilo":"$3"},
  {"item":"orange","type":"Clementine","weight":6,"pricePerKilo":"$7"},
  {"item":"watermelon","type":"Nova","quantity":1,"pricePerItem":"$5"},
  {"item":"orange","type":"Navel","weight":6,"pricePerKilo":"$7"},
  {"item":"pineapple","type":"Queen","quantity":4,"pricePerItem":"$15"},
  {"item":"pineapple","type":"Pernambuco","quantity":3,"pricePerItem":"$12"},
  {"item":"apple","type":"Cameo","weight":6,"pricePerKilo":"$7"},
  {"item":"watermelon","type":"Trio","quantity":2,"pricePerItem":"$9"},
  {"item":"pineapple","type":"Red Spanish","quantity":3,"pricePerItem":"$9,99"},
  {"item":"watermelon","type":"Millionaire","quantity":2,"pricePerItem":"$7"},
  {"item":"orange","type":"Tangerine","weight":4,"pricePerKilo":"$4,99"},
  {"item":"apple","type":"Jazz","weight":4,"pricePerKilo":"$5"},
]
```
# Solution:
```sh
npm start
```
