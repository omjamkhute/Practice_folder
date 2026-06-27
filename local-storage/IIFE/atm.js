// we cannot take user input as deposit it invoke immideatly so 
// it take initially zero 

const button = document.getElementById("withdraw-btn");

const withdrawAmount = document.getElementById("w-a");
const avlBalance = document.getElementById('balance');



const atm = function (initBalance) {
    let balance = initBalance;

    function withDraw(amt) {
        if (amt > balance) {
                return "Insufficient Balance";
   } else {
            balance = balance - amt;
            return balance;
        }
    }
    return { withDraw };
};

const om = atm(2000);

function reduce(){
    const amount = Number(withdrawAmount.value);
    const result = om.withDraw(amount);
    avlBalance.innerText = result;
}



button.addEventListener('click',reduce);

