// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Mảng products
const products = [
    new Product(1, "Laptop Dell Vs3000", 33000000, 10, "Electronics", true),
    new Product(2, "IPhone 15 Pro", 15000000, 0, "Electronics", false),
    new Product(3, "Tai nghe Volo", 500000, 50, "Accessories", true),
    new Product(4, "Mouse", 300000, 0, "Accessories", false),
    new Product(5, "Oppo A75", 7000000, 20, "Electronics", true),
    new Product(6, "Màn hình 27 inch", 2000000, 15, "Accessories", true),
];

// Câu 3
console.log("Câu 3:");
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log(nameAndPrice);

// Câu 4
console.log("Câu 4:");
const inStockProducts = products.filter(p => p.quantity > 0);
console.log(inStockProducts);

// Câu 5
console.log("Câu 5:");
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log(hasExpensiveProduct);

// Câu 6
console.log("Câu 6:");
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
console.log(allAccessoriesAvailable);

// Câu 7
console.log("Câu 7:");
const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
);
console.log(totalInventoryValue);

// Câu 8
console.log("Câu 8:");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// Câu 9
console.log("Câu 9:");
for (const p of products) {
    for (const key in p) {
        console.log(`${key}: ${p[key]}`);
    }
    console.log("----------");
}

// Câu 10
console.log("Câu 10:");
const availableAndInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log(availableAndInStock);
