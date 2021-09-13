// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {

  
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (var i = 0; i < products.length; i++) {
        if (id == i + 1) {
            cartList.push(products[i])
        }
    }
    console.log(cartList);
}
   


// Exercise 2
function cleanCart() {
    cartList.length = 0; 

}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
    for(var i = 0; i < cartList.length; i++ ){
        switch(cartList[i].type){
            case 'grocery':
                subtotal['grocery']+= cartList[i].price;
                break;
            case 'beauty':
                subtotal['beauty']+= cartList[i].price;
                break;
            case 'clothes':
                subtotal['clothes']+= cartList[i].price;  
                         
        }
    }    

}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    for(var i = 0; i < cartList.length; i++ ){
        total += cartList[i].price;
    }

    console.log (total);

}

// Exercise 5
function applyPromotionsSubtotals() {
    var aceite = 0;
    var mezcla = 0;
    var descuento;

    for(var i = 0; i < cartList.length; i++ ){
        if (cartList[i].name == 'cooking oil'){
            aceite ++;
        }

        if (cartList[i].name == 'Instant cupcake mixture'){
            mezcla ++;
        }
    }
    
    if (aceite >=3){
        descuento = .5 * aceite;
        total -= descuento;
        subtotal['grocery'].discount = descuento;
        console.log('Grocery oil discount ' + total)

    }

    if (mezcla >=10){
        descuento = mezcla * (2/3);
        total -= descuento;
        subtotal['grocery'].discount = descuento;
        console.log('Grocery Cupcake mixture discount ' + total)
    }

  
}

// Exercise 6
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    for (var i = 0; i< cartList.length; i++){
        if( cart[cartList[i].name] == null){
            cart[cartList[i].name] ={
                name: cartList[i].name,
                price: cartList[i].price,
                type: cartList[i].type,
                quantity: 1,
                subtotal: cartList[i].price,
                subtotalWithDiscount: cartList[i].price
              }
        }
        else {
            cart[cartList[i].name].quantity ++;
            cart[cartList[i].name].subtotal += cart[cartList[i].name].price
        }
    }
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}

// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    var descuento;

    if( cart['cooking oil'] != null ){

    if (cart['cooking oil'].quantity >= 3 ) {
        descuento = .5 * cart['cooking oil'].quantity;
        cart['cooking oil'].subtotalWithDiscount -= descuento; 
    }

    }

    if( cart['Instant cupcake mixture'] != null ){

    if (cart['Instant cupcake mixture'].quantity >= 10 ) {
        descuento = (2/3) * cart['Instant cupcake mixture'].quantity;
        cart['Instant cupcake mixture'].subtotalWithDiscount -= descuento; 
    }
}
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    addToCartList(id)
    generateCart()
    
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}