// script.js

const products = [
  { id: 1, name: "Floral Shirt", price: 45, image: "floral shirt.jpg" },
  { id: 2, name: "Summer Dress", price: 60, image: "light pants.jpg" },
  { id: 3, name: "Winter Coat", price: 120, image: "coat.jpg" },
  { id: 4, name: "Spring Jacket", price: 80, image: "jacket.jpg" }
];

function displayProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";
  products.forEach(prod => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" width="100%" />
      <h3>${prod.name}</h3>
      <p>$${prod.price}</p>
      <button onclick="addToCart(${prod.id})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function displayCart() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "product-card";
    row.innerHTML = `
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(row);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function handleAccountForm() {
  const form = document.getElementById("account-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    localStorage.setItem("accountName", name);
    alert("Account saved!");
  });
}
