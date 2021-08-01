function getCartItems() {
    db
        .collection("cartItems")
        .onSnapshot((snapshot) => {
            let cartItems = [];

            snapshot.docs.forEach((doc) => {
                cartItems.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            generateCartItems(cartItems);
            getSubtotal(cartItems)
        })

}

function getSubtotal(cartItems) {
    let subtotal = 0;

    cartItems.forEach((item) => {
        subtotal += (item.quantity * item.price);
    })

    document.querySelector(".subtotal").innerText = `${numeral(subtotal).format("$0,0.00")} CAD`
}

function decreaseQuantity(itemId) {
    let cartItem = db.collection("cartItems").doc(itemId);
    cartItem.get().then(function (doc) {
        if (doc.exists) {
            if (doc.data().quantity > 1) {
                cartItem.update({
                    quantity: doc.data().quantity - 1
                })
            }
        }
    })
}

function increaseQuantity(itemId) {
    let cartItem = db.collection("cartItems").doc(itemId);
    cartItem.get().then(function (doc) {
        if (doc.exists) {
            if (doc.data().quantity > 0) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
        }
    })
}

function deleteItem(itemId) {
    db.collection("cartItems").doc(itemId).delete();
}

function generateCartItems(cartItems) {
    let itemsHTML = "";

    cartItems.forEach((item) => {
        itemsHTML += `
            <div class="bg-white p-5 rounded-lg shadow-md transition transform duration-150 hover:scale-102 mt-5">
                <div class="flex items-center">
                    <div class="w-40 h-24 p-4 rounded-lg">
                        <img class="w-full h-full object-contain"
                            src="${item.image}"
                            alt="${item.title}"
                        >
                    </div>
                    <div class="flex-grow">
                        <h4 class="font-bold text-sm text-gray-600">${item.title}</h4>
                        <p class="text-sm text-gray-400">${item.brand}</p>
                    </div>
                    <div class="w-48 flex items-center">
                        <div data-id="${item.id}" class="decrease bg-gray-100 text-gray-400 flex items-center h-6 w-6 justify-center rounded-lg mr-2 cursor-pointer hover:bg-gray-200 transition duration-100 ease-in-out">
                            <i class="fas fa-chevron-left fa-xs"></i>
                        </div>
                        <h4 class="text-gray-400">${item.quantity}</h4>
                        <div data-id="${item.id}" class="increase bg-gray-100 text-gray-400 flex items-center h-6 w-6 justify-center rounded-lg ml-2 cursor-pointer hover:bg-gray-200 transition duration-100 ease-in-out">
                            <i class="fas fa-chevron-right fa-xs"></i>
                        </div>
                    </div>
                    <div class="w-48 font-bold text-gray-400">
                        <h2 class="text-lg">${numeral(item.price * item.quantity).format("$0,0.00")} CAD</h2>
                    </div>
                    <div data-id="${item.id}" class="delete w-10 font-bold text-gray-300 hover:text-gray-400 cursor-pointer">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            </div>
        `
    })

    document.querySelector(".cart-items").innerHTML = itemsHTML
    createEventListeners();
}

function createEventListeners() {
    let decreaseButtons = document.querySelectorAll(".decrease");
    let increaseButtons = document.querySelectorAll(".increase");
    let deleteButtons = document.querySelectorAll(".delete");

    decreaseButtons.forEach((button) => {
        button.addEventListener("click", function () {
            decreaseQuantity(button.dataset.id);
        })
    })

    increaseButtons.forEach((button) => {
        button.addEventListener("click", function () {
            increaseQuantity(button.dataset.id);
        })
    })

    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            deleteItem(button.dataset.id);
        })
    })
}

getCartItems()