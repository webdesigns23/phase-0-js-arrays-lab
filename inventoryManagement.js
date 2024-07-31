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
function removeLastProduct(){
    products.pop();
}

// Export the necessary parts for testing
module.exports = {
    products,
    logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
    updateProductQuantity: typeof updateProductQuantity !== 'undefined' ? updateProductQuantity : undefined,
    checkProductAvailability: typeof checkProductAvailability !== 'undefined' ? checkProductAvailability : undefined,
    removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
    calculateTotalInventoryValue: typeof calculateTotalInventoryValue !== 'undefined' ? calculateTotalInventoryValue : undefined
  };
  