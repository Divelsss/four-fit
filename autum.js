const products = [
    { id: 1, name: "Two Pieces set", price: 25000, image: "two piece set.jpg" },
    { id: 2, name: "Short skirt", price: 40000, image: "img2.jpg" },

    { id: 4, name: "Warm Long Jacket", price: 4500, image: "Long sleeve Jacket.jpg" },
    { id: 5, name: "Chicago set", price: 15000, image: "chicago.jpg" },
    { id: 6, name: "Jacket", price: 6700, image: "jacket.jpg" },
    { id: 7, name: "Long Sleeve Jacket", price: 12000, image: "jqcket2.jpg" },
    {id: 8, name: "Short dress", price: 10000, image: "gdress.jpg" },
    {id: 9, name: "White dress", price: 12000, image: "dress 2.jpg" },
    {id: 10, name: "Warm Bottom", price: 17500, image: "child.jpg" },
    {id: 11, name: "Warm skirt", price: 12500, image: "s1.jpg" },
    {id: 12, name: "White pant", price: 20500, image: "s3.jpg" },
    {id: 13, name: "Cute top", price: 30500, image: "s4.jpg" },
    {id: 14, name: "Colorful skirt", price: 34500, image: "s5.jpg" },
    {id: 15, name: "Bougie grey pant", price: 67500, image: "s6.jpg" },
    {id: 16, name: "Black jean", price: 86500, image: "s7.jpg" },
    {id: 17, name: "Black dress", price: 45500, image: "s8.jpg" },
    {id: 18, name: "Grey dress", price: 45500, image: "s9.jpg" },
    {id: 19, name: "Autumn special set", price: 123500, image: "s10.jpg" },
    {id: 20, name: "Autumn whole set", price: 250500, image: "s11.jpg" },
    {id: 21, name: "Black jacket", price: 123500, image: "s12.jpg" },



];
const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");

let cart = [];

function renderProducts() {
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: RWF ${product.price.toLocaleString()}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
  });
}

function addToCart(productId) {
  cart.push(productId);
  cartCount.textContent = cart.length;
  alert("Added to cart!");
}

renderProducts();
