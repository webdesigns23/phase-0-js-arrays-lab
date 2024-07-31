# Lab: Product Inventory Management System

## Overview

In this lab, you will build a product inventory management system for an online store. The system will enable you to store, retrieve, update, and delete product information. This exercise will help you practice array operations and improve your problem-solving skills in a real-world context.

### Scenario

You have been hired as a junior developer at an online retail company. The company needs a system to manage its product inventory efficiently. Your task is to build this system using JavaScript arrays. The system should handle operations like adding new products, updating existing product information, retrieving specific product details, checking product availability, and removing products that are out of stock.

### Objective

By the end of this lab, you should be able to:

- Declare and initialize an array to store product data.
- Add new product information to the array.
- Access and print specific product details using their index.
- Modify existing product information.
- Check product availability.
- Calculate the total inventory value.
- Remove a product from the array.

## Tools and Resources

- **Node.js:** To run your JavaScript files from the command line.
- **VSCode:** To write and execute your JavaScript code.
- **GitHub:** You will fork and clone the provided repository to get started. https://github.com/learn-co-curriculum/phase-0-js-arrays-lab.git

## Instructions

### Fork and Clone the Repository

1. Go to the provided GitHub repository link.
2. Click on the "Fork" button to create your own copy of the repository.
3. Clone your forked repository to your local machine.
4. Install the necessary dependencies:
   ```sh
   npm install
   ```

### Create the Product Inventory Array

1. Open the `inventoryManagement.js` file in VS Code.
2. Declare and initialize an array named `products` with the following product data:
   ```javascript
   let products = [
     ["Laptop", "Electronics", 10, 999.99],
     ["Phone", "Electronics", 25, 699.99],
     ["Headphones", "Accessories", 50, 199.99],
     ["Monitor", "Electronics", 15, 299.99]
   ];
   ```

### Access Product Information

1. Create a function called `logFirstProduct` that will console log the details of the first product using its index.

### Modify Product Information

1. Create a function called `updateProductQuantity` that updates the quantity of a product. The function should take a product and a new quantity as arguments.

### Check Product Availability

1. Create a function called `checkProductAvailability` that checks if a product is available (quantity > 0). The function should take a product from the array as an argument. If the product is available, console log "Product is available", otherwise console log "Product is out of stock".

### Calculate Total Inventory Value

1. Create a function called `calculateTotalInventoryValue` that calculates and console logs the total value of all products in the inventory. The function should take the `products` array as an argument. Add a console log at the end of the function to print out the total value in this format:
   ```sh
   "Total Inventory Value: $" + totalValue
   ```

### Remove a Product

1. Create a function called `removeLastProduct` that removes the last product from the array.

## Solution Example

```javascript
// Declare the Array
let products = [
  ["Laptop", "Electronics", 10, 999.99],
  ["Phone", "Electronics", 25, 699.99],
  ["Headphones", "Accessories", 50, 199.99],
  ["Monitor", "Electronics", 15, 299.99]
];

// Access Product Information
function logFirstProduct() {
  console.log(products[0]);
}

// Modify Product Information
function updateProductQuantity(product, newQuantity) {
  product[2] = newQuantity;
}

// Check Product Availability
function checkProductAvailability(product) {
  if (product[2] > 0) {
    console.log("Product is available");
  } else {
    console.log("Product is out of stock");
  }
}

// Calculate Total Inventory Value
function calculateTotalInventoryValue(products) {
  let totalValue = 0;
  for (let i = 0; i < products.length; i++) {
    totalValue += products[i][2] * products[i][3];
  }
  totalValue = totalValue.toFixed(2);
  console.log("Total Inventory Value: $" + totalValue);
}

// Remove Product
function removeLastProduct() {
  products.pop();
}
```