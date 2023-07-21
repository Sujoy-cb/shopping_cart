// Add to cart JS //

let items = document.querySelector(".items")
let shopCart = document.querySelector(".shop-cart")


let product =[
    {
        id:1,
        img:"tshirt1.jpg",
        name:"Jack & Jhones Lava",
        price:25
    },
    {
        id:2,
        img:"tshirt2.jpg",
        name:"Jack & Jhones Zenus",
        price:30
    },
    {
        id:3,
        img:"tshirt3.jpg",
        name:"Jack & Jhones Leaver",
        price:40
    },
    {
        id:4,
        img:"tshirt4.jpeg",
        name:"Jack & Jhones Menus",
        price:45
    },
    {
        id:5,
        img:"tshirt4.jpeg",
        name:"Jack & Jhones Menus",
        price:29
    },
    {
        id:6,
        img:"tshirt4.jpeg",
        name:"Jack & Jhones Menus",
        price:49
    },
    {
        id:7,
        img:"tshirt4.jpeg",
        name:"Jack & Jhones Menus",
        price:22
    },
    {
        id:8,
        img:"tshirt4.jpeg",
        name:"Jack & Jhones Menus",
        price:18
    },
]

let itemArr = []


let productList = ()=>{
    product.forEach((item, key)=>{
        let proDiv = document.createElement("div")
        proDiv.classList.add("pro_item")
        proDiv.innerHTML = `
        <div class="allPropducts">
            <div class="img">
                <img src="./images/${item.img}" alt="pro_img">
            </div>
            <div class="name">
                <h4>${item.name}</h4>
            </div>
            <div class="price">
                <p>$${item.price}</p>
            </div>
            <div class="cart-btn">
                <button class="cart" type="button" onclick="addToCart(${item.id})">add to cart</button>
            </div>
        </div>
        `
        items.appendChild(proDiv)
    })
}

productList()


let addToCart=(_id)=>{
    if(!itemArr.includes(_id)){
        itemArr.push(_id)
        let cartBtn= document.querySelector(".cart")
        if(cartBtn.classList.contains("cart")){
            cartBtn.classList.add("disabled")
            if(cartBtn.classList.contains("disabled")){
                cartBtn.innerHTML = "already in cart"
            }
            cartBtn.classList.remove("cart")
            shopCart.innerHTML = itemArr.length
        }
        
    }
}


