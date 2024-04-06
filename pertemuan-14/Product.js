// menggunakan objek prototype
function Product(name, price, image){
    this.name = name;
    this.price = price;
    this.image = image;
}


Product.prototype.getPriceIDR = function(){
    return this.price.toLocaleString("id", {
        style: 'currency',
        currency: 'IDR'
    });
};
const p1 = new Product(1,2,3)
console.log(p1.getPriceIDR());