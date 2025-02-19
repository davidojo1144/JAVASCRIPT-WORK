const cartItems = ["ssd","phone","cloth","jeans" ]

if (cartItems.length > 0 ) {
    console.log("you have " + cartItems.length + " items in your cart");
} 
else{
    console.log("Cart is empty")
}

let item = cartItems.map((items)=>items)
console.log("These are the items you have in your cart " + item)
