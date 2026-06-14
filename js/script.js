function addToCart(productName) {

    let cart = document.getElementById("cart");

    let item = document.createElement("p");

    item.textContent = productName;

    cart.appendChild(item);
}