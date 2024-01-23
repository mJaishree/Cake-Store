const menuItems = [
    { id: 1, name: "Whiteforest Cake", price: 850},
    { id: 2, name: "Blackforest Cake", price: 700 },
    { id: 3, name: "Venila Cake", price: 500 },
    {id : 4, name : "Strawberry Cake", price : 250},
    { id: 5, name: "Cup Cake", price: 850},
    { id: 6, name: "Brownie", price: 700 },
    { id: 7, name: "Rainbow Cake", price: 500 },
    {id : 8, name : "Redvelvet Cake", price : 250}
];

const cart = [];

function displayMenu() {
    //const menuSection = document.getElementById("menu");
	const menuSection = document.getElementById("m_menu");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>₹${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        menuSection.appendChild(menuItem);
    });
}

function addToCart(itemId) {
    const itemToAdd = menuItems.find(item => item.id === itemId);

    if (itemToAdd) {
        cart.push(itemToAdd);
        updateCart();
        showAddToCartMessage(itemToAdd.name);
    }
}

function updateCart() {
    //const cartItemsList = document.getElementById("cart-items");
   // const totalDisplay = document.getElementById("total");
	
	const cartItemsList = document.getElementById("m_cart-items"); // Corrected id
    const totalDisplay = document.getElementById("m_total");

    // Clear previous items
    cartItemsList.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItemsList.appendChild(cartItem);

        total += item.price;
    });

    totalDisplay.textContent = total.toFixed(2);
}

function showAddToCartMessage(itemName) {
    const messageContainer = document.createElement("div");
    messageContainer.className = "message-container";
    messageContainer.textContent = `${itemName} added to cart!`;

    document.body.appendChild(messageContainer);

    setTimeout(() => {
        messageContainer.remove();
    }, 2000);
}

function checkout() {
    alert("Thank you for your order!");
    
}

// Display the initial menu
displayMenu();
