/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // 1. create an empty object to store total
  const categoryTotals = {};
  
  // 2. with for loop go to transaction one by one
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category
    const price = transaction.price

    // check for category if it is already in the object, add the price
    if (categoryTotals[category]) {
      categoryTotals[category] += price
    } else {
      categoryTotals[category] = price;
    }
 }

 // final output in array
 const result = []

 // convert object in the array format
 for(let category in categoryTotals) {
  result.push({
    category : category,
    totalSpent: categoryTotals[category]
  })
 }
 // return final result
 return result
}

// example transaction
const transactions = [
  { id: 1, price: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, price: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, price: 30, category: 'Clothes', itemName: 'Jeans' }
]

const result = calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
