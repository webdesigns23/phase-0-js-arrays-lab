//create array
const products = ["Laptop", "Phone", "Headphones", "Monitor"]

//output first product
function logFirstProduct() {
    return products[0];
} 

//add product
function addProduct(productName) {
    return products.push();
}

//update product
function updateProductName(index, newName) {
    return products[index,newName];
}

//remove last product
function removeLastProduct() {
    return products.pop();
  }

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
