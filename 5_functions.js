// let age = 62;

// if (age < 18) {
// console.log("your ticket price is: Child £8.00");

// } else if (age >= 18 && age < 60) {
// console.log("your ticket price is: Adult £10.95");

// } else {
//     console.log("your ticket price is: Senior £7.50");
// }

//arrow functions 

// const favColor = () => {
//     console.log ('My favourite color is Blue');
// }

// favColor();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log('Stopping the grind');
//         coffeeIsGrinding = false;
//     } else {
//         console.log('Grinding is about to begin');
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();
// pressGrindBeans();

// const cashWithdrawal = (amount, accnumber) => {

//     console.log(`The amount you is : ${amount} for the folllowing account :${accnumber}`);

// }

// cashWithdrawal(300, 119056);
// cashWithdrawal(7000, 178956);
// cashWithdrawal(200, 142589);



// const favColor = (color) => {
//         console.log (`My favourite color is ${color}`);
//     }

//     favColor("red");


// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// }

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// }

// console.log("the Temperature is " + getFahrenheit(20) + "°F")

// const factorial = (n) => {
//     if ((n===0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n-1));
//     }
// }
// console.log(factorial(3));

// let pin = 1234
// let balance = 200

// const cashMachine = (pinNum, withdrawAmount) => {

//     if (pin == pinNum) {
        
//         if (withdrawAmount <= balance) {
//             console.log(`Successful Pin, you account balance is: £${balance} after withdrawal request you account balance is: £${balance - withdrawAmount}`)
//         } else {
//             console.log("you dont have sufficient funds ")
//         }
//     } else {
//         console.log("Pin incorrect Sorry please try again")
//     }
// }

// cashMachine(1234, 50);

let pin = 1234
let balance = 200

const cashMachine = (pinNum, withdrawAmount) => {

    if (pin == pinNum) {
        
        if (withdrawAmount <= balance) {
            console.log(`Successful Pin, you account balance is: £${balance} after withdrawal request you account balance is: £${balance - withdrawAmount}`)
        } else {
            console.log("you dont have sufficient funds ")
        }
    } else {
        console.log("Pin incorrect Sorry please try again")
    }
}

cashMachine(1234, 50);


// let pin = 1234
// let balance = 200

// const cashMachine = (pinNum, withdrawAmount) => {
//     if(pinNum == pin){
//         if(withdrawAmount <= balance){
//             console.log(`Successful, Withdrawing: £${withdrawAmount} New Balance: £${balance - withdrawAmount}`)
//         } else {
//             console.log(`Insufficient Funds`)
//         }
//     } else {
//         console.log(`Incorrect Pin`)
//     }
// }
// cashMachine(1234, 50) 