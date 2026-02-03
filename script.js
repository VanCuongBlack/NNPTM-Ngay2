// Câu 1: Constructor function
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
    new Product(1, "Laptop", 20000000, 10, "Electronics", true),
    new Product(2, "Phone", 15000000, 0, "Electronics", false),
    new Product(3, "Keyboard", 500000, 50, "Accessories", true),
    new Product(4, "Mouse", 300000, 0, "Accessories", false),
    new Product(5, "Monitor", 7000000, 20, "Electronics", true),
    new Product(6, "Headphones", 2000000, 15, "Accessories", true),
];

// DOM output
const output = document.getElementById("output");

function render(title, content) {
    const div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
        <h2>${title}</h2>
        <pre>${content}</pre>
    `;
    output.appendChild(div);
}

// Câu 3: name & price
const nameAndPrice = products.map(p => ({
    name: p.name,
    price: p.price
}));
render("Câu 3: Tên và giá sản phẩm", JSON.stringify(nameAndPrice, null, 2));

// Câu 4: Sản phẩm còn hàng
const inStockProducts = products.filter(p => p.quantity > 0);
render("Câu 4: Sản phẩm còn hàng", JSON.stringify(inStockProducts, null, 2));

// Câu 5: Có sản phẩm > 30 triệu?
const hasExpensiveProduct = products.some(p => p.price > 30000000);
render("Câu 5: Có sản phẩm trên 30.000.000?", hasExpensiveProduct);

// Câu 6: Accessories có đang bán hết không?
const allAccessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable);
render("Câu 6: Tất cả Accessories đang bán?", allAccessoriesAvailable);

// Câu 7: Tổng giá trị kho
const totalInventoryValue = products.reduce(
    (total, p) => total + p.price * p.quantity,
    0
);
render(
    "Câu 7: Tổng giá trị kho",
    totalInventoryValue.toLocaleString() + " VND"
);

// Câu 8: for...of
let result8 = "";
for (const p of products) {
    result8 += `${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}\n`;
}
render("Câu 8: Duyệt for...of", result8);

// Câu 9: for...in
let result9 = "";
for (const p of products) {
    for (const key in p) {
        result9 += `${key}: ${p[key]}\n`;
    }
    result9 += "----------\n";
}
render("Câu 9: for...in", result9);

// Câu 10: Sản phẩm đang bán và còn hàng
const availableAndInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
render(
    "Câu 10: Sản phẩm đang bán & còn hàng",
    availableAndInStock.join(", ")
);
