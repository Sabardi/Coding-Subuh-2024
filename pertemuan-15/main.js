// simulasi menambahkan kerjanjanh
const cart = new Cart();
// membuat objek wallet
const wallet = new Wallet(10000);

// coba menambhakn product
const iphone = new Product("iphone 15 promax", 33000000, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg");
const samsung = new Product("samsung", 6000000, "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg");

var product = [
    iphone, samsung
];


// fungsi untuk handle event

function openCart(){
    document/querySelector("#cart-dialog").showModal();
    showProductInCart();
}

function closeCart(){
    document.querySelector("#cart-dialog").closest();
}

function handleAddToCarat(index){
    cart.addItem(product[index]);
    updateCarTCountDisplay();
}

function handleRemoveFromCart(index){
    cart.removeItem(index);
    showProductInCart();
    updateCarTCountDisplay();
}

function topupWallet(){
    const topupAmount = Number(prompt("jumlah top Up"));

    if(isNaN(topupAmount) || topupAmount < 0){
        alert("jumlah top up salah")
        return;
    }

    wallet.topUp(topupAmount);
    updateWalletBalanceDisplay()
}

function handleChekOut(){
    const totalPay = cart.getTotalPrice();

    // bayar dgn wallet
    wallet.pay(totalPay);
}
// fungsi untuk menampilkan ke elemet html

function showAllProduct(){
    const productList = document.querySelector("#product-list");

    let index = 0;
    for(product of product){
        productList.innerHTML = 
        `
        <div class="product">
        <img src="${product.image}" alt="">
        <h3>${product.name}</h3>
        <p>${product.getPriceIDR()}</p>
        <button onclick="handleAddToCarat(${index})">Add to Cart</button>
        <button onclick="handleCheckOut()">Check Out</button>
        </div>
        `
        index++;
    }
}

// menampilkan list produk di keranjang/cart 
function showProductInCart(){
    const cartProductList = document.querySelector("#product-list-in-cart");
    const totalPriceInCart = document.querySelector("#total-product-price-in-cart");

    cartProductList.innerHTML = ""; // clear isi produk di keranjang
    
    let index = 0
    cart.items.forEach(product => {
        cartProductList.innerHTML += 
        `
        <div class="product">
        <img src="${product.image}" alt="">
        <div>
            <h3>${product.name}</h3>
            <p>${product.getPriceIDR()}</p>
            <button onclick="handleRemoveFromCart(${index})">Hapus</button> 
        </div>
        </div>
        `;
        index++;
    });

    totalPriceInCart.textContent = cart.getTotalPriceIDR();
}

// menampilkan jumlah item pada keranjang/cart
function updateCarTCountDisplay(){
    document.querySelector("#cartCount").textContent = cart.Count();
}

// tampilkan jumlah saldoo saat ini
function updateWalletBalanceDisplay(){
    document.querySelector("#wallet-balance").textContent = wallet.getCurrentBalanceIDR();
}

document.addEventListener("DOMContentLoaded", () =>{
   showAllProduct(); 
   updateCarTCountDisplay();
   updateWalletBalanceDisplay
})