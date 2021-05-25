// 1. Create a new JS file
// 2. Create closure called ATM
// 3. When called, it will accept an account number
// 4. Give the account an opening balance of 0
// 5. Have a function block for deposits. The deposit must be greater than 0. Also show the deposit was successful
// 6. Have a function block for withdrawls. But make sure withdrawls do not bring the balance below 0. Also, the 
//    withdrawl must be greater than 0. Finally, remind the user to take their money from the slot.
// 7. Have the ability to retrieve the account number and the balance.

function ATM(number){
    let account = number;
    let balance = 0;
    return{
        deposit: function(depoAmount){
            if(depoAmount > 0){
                balance += depoAmount;
                return "Your deposit of $" + depoAmount + " was successful.";
            }else{
                return "Your deposit was not successful. You must deposit an amount greater than 0."
            }
        },
        withdrawal: function(withAmount){
            if(withAmount > 0){
                if(balance - withAmount > 0){
                    balance -= withAmount;
                    return "Your withdrawl of " + withAmount + " was successful. Don't forget your money!";
                }else{
                    return "Your account has insufficient funds for a withdrawl amount of $" + withAmount
                }
            }
        },
        getBalance: function(){
            return "the balance in your account is " + balance;
        },
        getAccount: function(){
            return "your account number is " + account;
        }
    }
}

let banking = ATM("05233557");
console.log(banking.withdrawal(60));
console.log(banking.deposit(100));
console.log(banking.withdrawal(20));
console.log(banking.getBalance());
console.log(banking.getAccount());
