function getCartItems() {
    db
        .collection("cartItems")
        .onSnapshot((snapshot) => {
            let quantity = 0;

            snapshot.forEach((doc) => {
                quantity += doc.data().quantity
            })

            setCartCounter(quantity);
        })
}

function setCartCounter(quantity) {
    document.querySelector(".cart-count").innerText = quantity;
}

getCartItems();