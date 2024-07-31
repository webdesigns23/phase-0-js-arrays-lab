const inventoryManagement = require('../inventoryManagement');

describe('Inventory Management', () => {
  const { products } = inventoryManagement;

  // Original products array
  const originalProducts = [
    ["Laptop", "Electronics", 10, 999.99],
    ["Phone", "Electronics", 25, 699.99],
    ["Headphones", "Accessories", 50, 199.99],
    ["Monitor", "Electronics", 15, 299.99]
  ];

  beforeEach(() => {
    // Reset products array to its original state before each test
    products.length = 0;
    originalProducts.forEach(product => products.push([...product]));
  });

  test('should initialize products with correct values', () => {
    expect(products.length).toBe(4);
    expect(products[0]).toEqual(["Laptop", "Electronics", 10, 999.99]);
    expect(products[1]).toEqual(["Phone", "Electronics", 25, 699.99]);
    expect(products[2]).toEqual(["Headphones", "Accessories", 50, 199.99]);
    expect(products[3]).toEqual(["Monitor", "Electronics", 15, 299.99]);
  });

  test('should log the first product correctly', () => {
    if (typeof inventoryManagement.logFirstProduct !== 'function') {
      throw new Error('logFirstProduct is not defined');
    }
    const logSpy = jest.spyOn(console, 'log');
    inventoryManagement.logFirstProduct();
    expect(logSpy).toHaveBeenCalledWith(["Laptop", "Electronics", 10, 999.99]);
    logSpy.mockRestore();
  });

  test('should modify product quantity correctly', () => {
    if (typeof inventoryManagement.updateProductQuantity !== 'function') {
      throw new Error('updateProductQuantity is not defined');
    }
    inventoryManagement.updateProductQuantity(products[0], 20);
    expect(products[0][2]).toBe(20);
  });

  test('should check product availability correctly', () => {
    if (typeof inventoryManagement.checkProductAvailability !== 'function') {
      throw new Error('checkProductAvailability is not defined');
    }
    const logSpy = jest.spyOn(console, 'log');
    
    inventoryManagement.checkProductAvailability(products[0]);
    expect(logSpy).toHaveBeenCalledWith("Product is available");

    inventoryManagement.updateProductQuantity(products[0], 0);
    inventoryManagement.checkProductAvailability(products[0]);
    expect(logSpy).toHaveBeenCalledWith("Product is out of stock");

    logSpy.mockRestore();
  });

  test('should calculate total inventory value correctly', () => {
    if (typeof inventoryManagement.calculateTotalInventoryValue !== 'function') {
      throw new Error('calculateTotalInventoryValue is not defined');
    }
    const logSpy = jest.spyOn(console, 'log');
    inventoryManagement.calculateTotalInventoryValue(products);
    const expectedValue = (10 * 999.99 + 25 * 699.99 + 50 * 199.99 + 15 * 299.99).toFixed(2); // Correct quantities
    expect(logSpy).toHaveBeenCalledWith(`Total Inventory Value: $${expectedValue}`);
    logSpy.mockRestore();
  });

  test('should remove the last product correctly', () => {
    if (typeof inventoryManagement.removeLastProduct !== 'function') {
      throw new Error('removeLastProduct is not defined');
    }
    inventoryManagement.removeLastProduct();
    expect(products.length).toBe(3);
    expect(products).not.toContainEqual(["Monitor", "Electronics", 15, 299.99]);
  });
});
