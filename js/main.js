function getItems() {
    var doc1Ref = db.collection("items").doc("9Wd7FiwYivqBS4iJbEj5");
    var doc2Ref = db.collection("items").doc("DIJGDSNdde17mbKIpWCI");
    var doc3Ref = db.collection("items").doc("E81m1Ccsw7jr9bYEvgKZ");
    var doc4Ref = db.collection("items").doc("InG2fWaYc7DZ0GoypQCj");
    var doc5Ref = db.collection("items").doc("dmO9nSYVjGWrzMb1oRht");
    var doc6Ref = db.collection("items").doc("qLBGj6GwtuPg7rnKtSbS");

    let item1 = [];
    let item2 = [];
    let item3 = [];
    let item4 = [];
    let item5 = [];
    let item6 = [];

    doc1Ref.get().then((doc) => {
        if (doc.exists) {
            item1.push({
                id: doc.id,
                image: doc.data().image,
                title: doc.data().title,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price
            })
        } else {
            return;
        }

        generateItem1(item1);
    })

    doc2Ref.get().then((doc) => {
        if (doc.exists) {
            item2.push({
                id: doc.id,
                image: doc.data().image,
                title: doc.data().title,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price
            })
        } else {
            return;
        }

        generateItem2(item2);
    })

    doc3Ref.get().then((doc) => {
        if (doc.exists) {
            item3.push({
                id: doc.id,
                image: doc.data().image,
                title: doc.data().title,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price
            })
        } else {
            return;
        }

        generateItem3(item3);
    })

    doc4Ref.get().then((doc) => {
        if (doc.exists) {
            item4.push({
                id: doc.id,
                image: doc.data().image,
                title: doc.data().title,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price
            })
        } else {
            return;
        }

        generateItem4(item4);
    })

    doc5Ref.get().then((doc) => {
        if (doc.exists) {
            item5.push({
                id: doc.id,
                image: doc.data().image,
                title: doc.data().title,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price
            })
        } else {
            return;
        }

        generateItem5(item5);
    })

    doc6Ref.get().then((doc) => {
        if (doc.exists) {
            item6.push({
                id: doc.id,
                image: doc.data().image,
                title: doc.data().title,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price
            })
        } else {
            return;
        }

        generateItem6(item6);
    })
}

function addToCart(item) {
    let cartItem = db.collection("cartItems").doc(item.id);
    cartItem.get()
        .then(function (doc) {
            if (doc.exists) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                cartItem.set({
                    image: item.image,
                    title: item.title,
                    brand: item.brand,
                    rating: item.rating,
                    price: item.price,
                    quantity: 1
                })
            }
        })
}

function generateItem1(item1) {
    item1.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("bg-white", "rounded-lg", "cursor-pointer", "transition", "transform", "shadow-md", "duration-150", "hover:scale-110", "flex", "flex-col", "items.center");
        doc.innerHTML = `
            <div class="w-48 h-52 image">
                <img class="w-full h-full object-contain p-4" src="${item.image}" alt="${item.title}">
            </div>
            <div class="flex flex-col w-full h-full justify-end">
                <h4 class="text-gray-700 font-bold text-sm px-4">${item.title}</h4>
                <h5 class="text-green-700 font-bold px-4">${item.brand}</h5>
                <div class="text-yellow-400 font-bold my-1 px-4">⭐⭐⭐⭐ ${item.rating}</div>
                <h3 class="font-bold text-gray-700 text-lg px-4 mb-3">${numeral(item.price).format("$0,0.00")} CAD</h3>
            </div>
        `

        let addToCartElement = document.createElement("div");
        addToCartElement.classList.add("mx-3", "mb-3", "bg-yellow-500", "p-1", "rounded-lg", "text-center", "text-white", "transition", "transform", "duration-150", "hover:scale-110", "shadow-md");
        addToCartElement.innerText = "Add to Cart";
        addToCartElement.addEventListener("click", function () {
            addToCart(item);
        })

        doc.appendChild(addToCartElement);
        document.querySelector(".product1").appendChild(doc);
    })
}

function generateItem2(item2) {
    item2.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("bg-white", "rounded-lg", "cursor-pointer", "transition", "transform", "shadow-md", "duration-150", "hover:scale-110", "flex", "flex-col", "items.center", "small:ml-0", "ml-5", "small:mt-5")
        doc.innerHTML = `
            <div class="w-48 h-52 image">
                <img class="w-full h-full object-contain p-4" src="${item.image}" alt="${item.title}">
            </div>
            <div class="flex flex-col w-full h-full justify-end">
                <h4 class="text-gray-700 font-bold text-sm px-4">${item.title}</h4>
                <h5 class="text-green-700 font-bold px-4">${item.brand}</h5>
                <div class="text-yellow-400 font-bold my-1 px-4">⭐⭐⭐⭐⭐ ${item.rating}</div>
                <h3 class="font-bold text-gray-700 text-lg px-4 mb-3">${numeral(item.price).format("$0,0.00")} CAD</h3>
            </div>
        `

        let addToCartElement = document.createElement("div");
        addToCartElement.classList.add("mx-3", "mb-3", "bg-yellow-500", "p-1", "rounded-lg", "text-center", "text-white", "transition", "transform", "duration-150", "hover:scale-110", "shadow-md");
        addToCartElement.innerText = "Add to Cart";
        addToCartElement.addEventListener("click", function () {
            addToCart(item);
        })

        doc.appendChild(addToCartElement);
        document.querySelector(".product2").appendChild(doc);
    })
}

function generateItem3(item3) {
    item3.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("bg-white", "rounded-lg", "cursor-pointer", "transition", "transform", "shadow-md", "duration-150", "hover:scale-110", "flex", "flex-col", "items.center");
        doc.innerHTML = `
            <div class="w-48 h-52 image">
                <img class="w-full h-full object-contain p-4" src="${item.image}" alt="${item.title}">
            </div>
            <div class="flex flex-col w-full h-full justify-end">
                <h4 class="text-gray-700 font-bold text-sm px-4">${item.title}</h4>
                <h5 class="text-green-700 font-bold px-4">${item.brand}</h5>
                <div class="text-yellow-400 font-bold my-1 px-4">⭐⭐⭐⭐⭐ ${item.rating}</div>
                <h3 class="font-bold text-gray-700 text-lg px-4 mb-3">${numeral(item.price).format("$0,0.00")} CAD</h3>
            </div>
        `

        let addToCartElement = document.createElement("div");
        addToCartElement.classList.add("mx-3", "mb-3", "bg-yellow-500", "p-1", "rounded-lg", "text-center", "text-white", "transition", "transform", "duration-150", "hover:scale-110", "shadow-md");
        addToCartElement.innerText = "Add to Cart";
        addToCartElement.addEventListener("click", function () {
            addToCart(item);
        })

        doc.appendChild(addToCartElement);
        document.querySelector(".product3").appendChild(doc);
    })
}

function generateItem4(item4) {
    item4.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("bg-white", "rounded-lg", "cursor-pointer", "transition", "transform", "shadow-md", "duration-150", "hover:scale-110", "flex", "flex-col", "items.center", "small:ml-0", "ml-5", "small:mt-5")
        doc.innerHTML = `
            <div class="w-48 h-52 image">
                <img class="w-full h-full object-contain p-4" src="${item.image}" alt="${item.title}">
            </div>
            <div class="flex flex-col w-full h-full justify-end">
                <h4 class="text-gray-700 font-bold text-sm px-4">${item.title}</h4>
                <h5 class="text-green-700 font-bold px-4">${item.brand}</h5>
                <div class="text-yellow-400 font-bold my-1 px-4">⭐⭐⭐⭐⭐ ${item.rating}</div>
                <h3 class="font-bold text-gray-700 text-lg px-4 mb-3">${numeral(item.price).format("$0,0.00")} CAD</h3>
            </div>
        `

        let addToCartElement = document.createElement("div");
        addToCartElement.classList.add("mx-3", "mb-3", "bg-yellow-500", "p-1", "rounded-lg", "text-center", "text-white", "transition", "transform", "duration-150", "hover:scale-110", "shadow-md");
        addToCartElement.innerText = "Add to Cart";
        addToCartElement.addEventListener("click", function () {
            addToCart(item);
        })

        doc.appendChild(addToCartElement);
        document.querySelector(".product4").appendChild(doc);
    })
}

function generateItem5(item5) {
    item5.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("bg-white", "rounded-lg", "cursor-pointer", "transition", "transform", "shadow-md", "duration-150", "hover:scale-110", "flex", "flex-col", "items.center");
        doc.innerHTML = `
            <div class="w-48 h-52 image">
                <img class="w-full h-full object-contain p-4" src="${item.image}" alt="${item.title}">
            </div>
            <div class="flex flex-col w-full h-full justify-end">
                <h4 class="text-gray-700 font-bold text-sm px-4">${item.title}</h4>
                <h5 class="text-green-700 font-bold px-4">${item.brand}</h5>
                <div class="text-yellow-400 font-bold my-1 px-4">⭐⭐⭐⭐ ${item.rating}</div>
                <h3 class="font-bold text-gray-700 text-lg px-4 mb-3">${numeral(item.price).format("$0,0.00")} CAD</h3>
            </div>
        `

        let addToCartElement = document.createElement("div");
        addToCartElement.classList.add("mx-3", "mb-3", "bg-yellow-500", "p-1", "rounded-lg", "text-center", "text-white", "transition", "transform", "duration-150", "hover:scale-110", "shadow-md");
        addToCartElement.innerText = "Add to Cart";
        addToCartElement.addEventListener("click", function () {
            addToCart(item);
        })

        doc.appendChild(addToCartElement);
        document.querySelector(".product5").appendChild(doc);
    })
}

function generateItem6(item6) {
    item6.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("bg-white", "rounded-lg", "cursor-pointer", "transition", "transform", "shadow-md", "duration-150", "hover:scale-110", "flex", "flex-col", "items.center", "small:ml-0", "ml-5", "small:mt-5")
        doc.innerHTML = `
            <div class="w-48 h-52 image">
                <img class="w-full h-full object-contain p-4" src="${item.image}" alt="${item.title}">
            </div>
            <div class="flex flex-col w-full h-full justify-end">
                <h4 class="text-gray-700 font-bold text-sm px-4">${item.title}</h4>
                <h5 class="text-green-700 font-bold px-4">${item.brand}</h5>
                <div class="text-yellow-400 font-bold my-1 px-4">⭐⭐⭐⭐⭐ ${item.rating}</div>
                <h3 class="font-bold text-gray-700 text-lg px-4 mb-3">${numeral(item.price).format("$0,0.00")} CAD</h3>
            </div>
        `

        let addToCartElement = document.createElement("div");
        addToCartElement.classList.add("mx-3", "mb-3", "bg-yellow-500", "p-1", "rounded-lg", "text-center", "text-white", "transition", "transform", "duration-150", "hover:scale-110", "shadow-md");
        addToCartElement.innerText = "Add to Cart";
        addToCartElement.addEventListener("click", function () {
            addToCart(item);
        })

        doc.appendChild(addToCartElement);
        document.querySelector(".product6").appendChild(doc);
    })
}

getItems();