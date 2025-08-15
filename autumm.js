const products = [
    { id: 1, name: "Two Pieces set", price: 25000, image: "two piece set.jpg" },
    { id: 2, name: "Short skirt", price: 40000, image: "img2.jpg" },
    { id: 4, name: "Warm Long Jacket", price: 4500, image: "Long sleeve Jacket.jpg" },
    { id: 5, name: "Chicago set", price: 15000, image: "chicago.jpg" },
    { id: 6, name: "Jacket", price: 6700, image: "jacket.jpg" },
    { id: 7, name: "Long Sleeve Jacket", price: 12000, image: "jqcket2.jpg" },
    { id: 8, name: "Short dress", price: 10000, image: "gdress.jpg" },
    { id: 9, name: "White dress", price: 12000, image: "dress 2.jpg" },
    { id: 10, name: "Warm Bottom", price: 17500, image: "child.jpg" },
    { id: 11, name: "Warm skirt", price: 12500, image: "s1.jpg" },
    { id: 12, name: "White pant", price: 20500, image: "s3.jpg" },
    { id: 13, name: "Cute top", price: 30500, image: "s4.jpg" },
    { id: 14, name: "Colorful skirt", price: 34500, image: "s5.jpg" },
    { id: 15, name: "Bougie grey pant", price: 67500, image: "s6.jpg" },
    { id: 16, name: "Black jean", price: 86500, image: "s7.jpg" },
    { id: 17, name: "Black dress", price: 45500, image: "s8.jpg" },
    { id: 18, name: "Grey dress", price: 45500, image: "s9.jpg" },
    { id: 19, name: "Autumn special set", price: 123500, image: "s10.jpg" },
    { id: 20, name: "Autumn whole set", price: 250500, image: "s11.jpg" },
    { id: 21, name: "Black jacket", price: 123500, image: "s12.jpg" }
];

const productGrid = document.getElementById('product-grid');
const cartCountEl = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsList = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
let cart = {};

// Render all products dynamically
function renderProducts() {
    productGrid.innerHTML = products.map(p => `
        <div class="product-card" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">
            <img src="${p.image}" alt="${p.name}">
            <p class="name">${p.name}</p>
            <p class="price">${p.price.toLocaleString()} RWF</p>
            <span class="cart-btn add-to-cart" role="button" aria-label="Add ${p.name} to cart">
                <i class="fas fa-cart-plus"></i>
            </span>
        </div>
    `).join('');

    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.product-card');
            const id = card.dataset.id;
            const name = card.dataset.name;
            const price = parseFloat(card.dataset.price);

            if(cart[id]) {
                cart[id].quantity += 1;
            } else {
                cart[id] = { name, price, quantity: 1 };
            }
            updateCartUI();
        });
    });
}

// Update the cart sidebar UI
function updateCartUI() {
    const items = Object.values(cart);
    cartItemsList.innerHTML = '';

    if(items.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
        cartCountEl.style.display = 'none';
        cartTotalEl.textContent = 'Total: 0 RWF';
        return;
    }

    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalQuantity;
    cartCountEl.style.display = 'inline-block';

    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} RWF
            <button class="remove-btn" data-id="${Object.keys(cart)[index]}" aria-label="Remove ${item.name}">&times;</button>
        `;
        cartItemsList.appendChild(li);
    });

    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalEl.textContent = `Total: ${totalPrice.toLocaleString()} RWF`;

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            delete cart[id];
            updateCartUI();
        });
    });
}

// Toggle cart sidebar open/close
document.querySelector('.cart-container').addEventListener('click', () => {
    cartSidebar.classList.toggle('open');
});

renderProducts();
