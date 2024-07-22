
// Initialize the shopping cart as an empty array
let shoppingCart = [];

// Function to display items in the shopping cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear the previous content

    // Retrieve cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Loop through each item in the cartData
    for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];

        // Create a div element for each item
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        // Create a span for the item name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;
        nameSpan.classList.add('item-name');

        // Create a span for the item price
        const priceSpan = document.createElement('span');
        priceSpan.textContent = '$' + item.price.toFixed(2);
        priceSpan.classList.add('item-price');

        //
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.classList.add('buy-button');

        //
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            removeItemFromCart(i);
        });

        // Append name and price spans to the item div
        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(priceSpan);
        itemDiv.appendChild(buyButton);
        itemDiv.appendChild(deleteButton);

        // Append the item div to the cartItems div
        cartItems.appendChild(itemDiv);
    }
}

function removeItemFromCart(index) {
    // Retrieve the cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Remove the item at the specified index
    cartData.splice(index, 1);

    // Store the updated cart data back in local storage
    localStorage.setItem('shoppingCart', JSON.stringify(cartData));

    // Refresh the cart display
    displayCart();
}


// Function to add an item to the shopping 
function addItemToCart(name, price) {
    const item = { name, price };

    // Retrieve existing cart data from local storage
    const cartData = JSON.parse(localStorage.getItem('shoppingCart')) || [];

    // Add the new item to the cart data
    cartData.push(item);

    // Store the updated cart data back in local storage
    localStorage.setItem('shoppingCart', JSON.stringify(cartData));
}





