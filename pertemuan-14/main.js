// simulasi menambahkan kerjanjanh
const keranjang = new Cart();
// membuat objek wallet
const goPay = new Wallet(10000);

// coba menambhakn product
const iphone = new Product("iphone 15 promax", 33000000, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg");
const samsung = new Product("samsung", 6000000, "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg");

// tambahkan iphone ke kerjanjang 
keranjang.addItem(iphone);
// keranjang.addItem(samsung);

// top up

goPay.topUp(33000000);
console.log(goPay.getCurrentBalanceIDR());