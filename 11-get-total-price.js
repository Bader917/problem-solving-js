// Challenge 11 - Calculate Total Price * quantity Using reduce() with Initial Value

let products = [
  { name: "Keyboard", price: 100, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 3 },
  { name: "Monitor", price: 800, quantity: 1 },
];

let total = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

console.log(`Total: ${total}`); // Output: Total: 1150
