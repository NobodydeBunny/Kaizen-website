  /* cart html*/
  
  function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.getElementById('cartItems');
    const emptyCartSection = document.getElementById('emptyCartText');
    const cartContainer = document.getElementById('cartContainer');
    const totalPriceElement = document.getElementById('totalPrice');

    if (cart.length === 0) {
      emptyCartSection.style.display = 'block'; 
      cartContainer.style.display = 'none';    
    } else {
      emptyCartSection.style.display = 'none';  
      cartContainer.style.display = 'block';  
      cartTableBody.innerHTML = '';

      let totalPrice = 0;
  
      cart.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td class="carttd">${item.name}</td>
          <td class="carttd">$${item.price.toFixed(2)}</td>
          <td class="carttd">${item.color}</td>
          <td class="carttd"><button class="remove-item-btn" onclick="removeItem(${index})">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
        totalPrice += item.price;
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;});
    }
}

function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCart(); 
}

function clearCart() {
    localStorage.removeItem('cart');
}

window.onload = updateCart;
