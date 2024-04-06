class Cart{
    constructor(){
        // tempat menyimpan kumpulan data
        this.items = [];
    }

    addItem(Product){
        // melakukan pengecekan apakah item berasal dari produk
        // jk dari kelas product maka tambahkan
        if(Product instanceof Product){
            this.items.push(Product);
        }else{
            // jika tidak error tidak bisa menambahkan objek selain produk
            console.error("tidak bisa menambhakan object selain product ke kerjanjangan");
        }
    }

    removeItem(index){
        // array splice untuk menghapus item sebanyak 1
        this.items.splice(index,1);
    }

    Count(){
        return this.items = [];  
    }

    getTotalPrice(){
        let TotalPrice = 0;
        this.items.forEach(product => TotalPrice += product.price);
        return TotalPrice;
    }

    getTotalPriceIDR(){
        return this.getTotalPrice().toLocaleString("id", {
            style: "currency",
            currency: "IDR",
        })
    }
}