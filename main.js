const input = [
  { item: "apple", type: "Fuji", weight: 10, pricePerKilo: "$3" },
  { item: "orange", type: "Clementine", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Nova", quantity: 1, pricePerItem: "$5" },
  { item: "orange", type: "Navel", weight: 6, pricePerKilo: "$7" },
  { item: "pineapple", type: "Queen", quantity: 4, pricePerItem: "$15" },
  { item: "pineapple", type: "Pernambuco", quantity: 3, pricePerItem: "$12" },
  { item: "apple", type: "Cameo", weight: 6, pricePerKilo: "$7" },
  { item: "watermelon", type: "Trio", quantity: 2, pricePerItem: "$9" },
  {
    item: "pineapple",
    type: "Red Spanish",
    quantity: 3,
    pricePerItem: "$9,99",
  },
  { item: "watermelon", type: "Millionaire", quantity: 2, pricePerItem: "$7" },
  { item: "orange", type: "Tangerine", weight: 4, pricePerKilo: "$4,99" },
  { item: "apple", type: "Jazz", weight: 4, pricePerKilo: "$5" },
];

function validator(input) {
  for (let element of input) {
    if (typeof element.item !== "string") return false;
    if (typeof element.type !== "string") return false;
    if (
      typeof element.weight !== "number" &&
      typeof element.quantity !== "number"
    )
      return false;

    if (
      typeof element.pricePerKilo !== "string" &&
      typeof element.pricePerItem !== "string"
    ) {
      return false;
    } else {
      let checkPrice = element.pricePerKilo || element.pricePerItem;
      if (checkPrice.search(/\$([0-9]+([,][0-9]*)?|[0-9]+)$/) === -1)
        return false;
    }
  }

  return true;
}

function firstLetterCaps(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function searchByItems(arr, item, count) {
  let total = 0;
  const itemCount = count;
  const searchItem = item;
  const filter = arr.filter((item) => item.item === searchItem);

  for (let element of filter) {
    total += element[itemCount];
  }
  console.log(firstLetterCaps(item) + "s - " + total);
}

function compareByItem(a, b) {
  let aKey = a.item;
  let bKey = b.item;
  if (aKey > bKey) return 1;
  if (aKey == bKey) return 0;
  if (aKey < bKey) return -1;
}

function priceNormalization(price) {
  return price.substring(1).replace(/\,/, ".");
}

function compareBycost(a, b) {
  let aKey = a.pricePerKilo || a.pricePerItem;
  let bKey = b.pricePerKilo || b.pricePerItem;

  aKey = Number(priceNormalization(aKey)) * (a.weight || a.quantity);
  bKey = Number(priceNormalization(bKey)) * (b.weight || b.quantity);

  if (aKey > bKey) return 1;
  if (aKey == bKey) return 0;
  if (aKey < bKey) return -1;
}

function costOfAllGoods(input) {
  if (!validator(input)) return console.log("Error input data validation");

  console.log("total quantity of all watermelons:");
  searchByItems(input, "watermelon", "quantity");

  console.log("\ntotal weight of all apples:");
  searchByItems(input, "apple", "weight");

  console.log("\nSort the array in alphabetical order by item field:");
  let sortArray = input.slice();
  sortArray.sort(compareByItem);
  console.log(sortArray);

  console.log("\nSort the array by cost of the record:");
  sortArray = input.slice();
  sortArray.sort(compareBycost);
  console.log(sortArray);

  console.log("\nthe type of oranges with the least price:");
  let orange = input.filter((item) => item.item === "orange");
  let orangeMin = orange.sort(compareBycost).slice(0, 1);
  console.log(`The cheapest orange type is: ${orangeMin[0].type}`);

  console.log("\nthe cost of the goods by item name:");
  let costArray = [];
  input.forEach((element) => {
    costArray[element.item] = input.filter(
      (item) => item.item === element.item
    );
  });

  for (let key in costArray) {
    let cost = 0;
    costArray[key].forEach((element) => {
      let price = priceNormalization(
        element.pricePerKilo || element.pricePerItem
      );
      let counter = element.weight || element.quantity;
      cost += counter * price;
    });
    console.log(firstLetterCaps(key) + "s - $" + +cost.toFixed(2));
  }

  console.log("\nthe cost that should be paid for all these goods:");
  let totalPrice = 0;
  input.forEach((element) => {
    let price = priceNormalization(
      element.pricePerKilo || element.pricePerItem
    );
    let counter = element.weight || element.quantity;
    totalPrice += counter * price;
  });
  console.log("Total price: $" + totalPrice);
}

costOfAllGoods(input);
