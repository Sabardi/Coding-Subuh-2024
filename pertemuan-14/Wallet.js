class Wallet{
    constructor(initialBalance){
        this.balance = initialBalance;
    }

    // method top up

    topUp(amount){
        if(amount < 0 && isNaN(amount)){
            console.error("jumlah top up salah")
            return
        }
        this.balance += amount;
    }

    // method witdraw
    withdraw(amount){
        if(isNaN(amount) && this.balance && amount < 0){
            console.error("jumlah penarikan salah")
            return
        }
    }

    // method bayar
    pay(amount){
       const pin = Number(prompt("inputkan pin"));
       const isValidAmount =isNaN(amount) && amount > this.balance && amount < 0;
       const isPinCorrect = pin === 123456;

       //    jika pin salah
       if(!isPinCorrect){
           alert("pin salah")
           return;
       }
       
       // jika invalid amount 
       if(!isValidAmount){
        alert("saldo tidak cukup, silahkan topup Dulu!")
        return
       }
       
       // jika valid amount dan pin 
       if(isValidAmount && isPinCorrect){
        this.balance -= amount;
       } 


       // jika valid amount dan pin 
       if(isValidAmount && isPinCorrect){
        this.balance -= amount;
       }
    }

    getCurrentBalance(){
        return this.balance;
    }

    getCurrentBalanceIDR(){
        return this.balance.toLocaleString("id", {
            style: "currency",
            currency: "IDR",
        })
    }
}