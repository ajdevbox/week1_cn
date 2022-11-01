// lesson on arrays

// let coffeeOrder =[
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder[2]);  


//Assiging a new value to array

// let coffeeOrder =[
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder.push(" Ann - Vanilla Latte"); 
// console.log(`\n${coffeeOrder}\n`);

// coffeeOrder.pop([-1]);
// console.log(`\n${coffeeOrder}\n`);

// console.log(coffeeOrder[2]);  
// console.log(coffeeOrder[1]);  
// console.log(coffeeOrder); 

// coffeeOrder.push("Donna - Espresso");
// console.log(coffeeOrder);

// let favDrink =[
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"

// ];

// for(let i = 0; i < favDrink.length; i++ ){
//     console.log(favDrink[i]);

// }

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++){
//     if(i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Even numbers bewteen 0 and 20: ${multiplesTwo}`);

// let age = 15;

// while (age < 18 ){

//     console.log(`You are a child! ${age}`);
//     age++;
// }

// console.log(`you are a adult! ${age}`);
// a


//==================================================

//Activity 1 

// Make an array of 3 your favourite songs. 
// 3 of them.
// Log them to the console

// let songList = ["Hotel California", "Skys the limit" ,"Easy like Sunday"]

// //console.log(songList);
// //Adding another two songs to the list
// songList.push("firestorm","Pop it like its hot");
// console.table(songList);

// //remove the last song
// songList.pop();
// console.table(songList);

//===============================================

//Activity 2:
// Using MDN choose one of the following methods: 
// map(), shift(), unshift(), splice(), slice().

// Create a program to demonstrate the use of the 
// method.




//===============================================
// ALL ACTIVITIES USINGS LOOPS 
//===============================================

// Activity 1:
// Create an array that lists your favourite films, up to 

// 5 elements.
// Add 2 more using a method. 
// Use a loop to cycle through the array

// let favFilm = ["God Father", "Limitless" ,"Black Hat", "Any Given Sunday", "Remember the Titans"]

// // console.table(favFilm)
// // Adding another two more films
// favFilm.push("Mission Impossible","James Bond collection");
// // console.table(favFilm)

// // Loop through the array and outputs the results
// console.log("\n")

// for (let i = 0; i < favFilm.length; i++) {
//     console.log(`${[i]} ${favFilm[i]}`);
// }
// console.log("\n")
// // console.table(favFilm);

//===================================================

// // Activity 2:

// // Generate 6 random numbers between 
// // 1-50 and log them to the console.

// for (let i = 0; i < 6; i++) {
//     console.log((Math.floor(Math.random() * 50)));
// }

// //==================================================

// Activity 3:
// If we can create a loop to put 0-9 on the screen, how 
// can we count from 9-0? Create a program that does 
// this

// for (let i = 9; i >= 1; i--) {
//     console.log(i)
// }

//==================================================

// Activity 4:
// Displays 4 films stored in an array. 
// Use a for loop to show each film in the array.

// Use an if statement to check if the 3rd film in the array is 
// Ghostbusters. 
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! 
// we want Ghostbusters

// let favFilm = ["God Father", "Limitless" ,"Black Hat","Lion King", "Ghostbusters" ,]

// for (let i = 0; i < favFilm.length; i++) {   
// }

// if (favFilm[3] === "Ghostbusters") {
//     console.log("Yay it's Ghostbusters");
// } else {
//     console.log("Boo! we want Ghostbusters")
// }

//===================================================

//Activity 5:
//Generate a random number between 1 and 30 
//six time
// For each random number generated, check if 
// this number of divisible by 7 or not.
// Log out a message to the console if it is divisible 
// by 7 or not.

let numberList = [];

// this function generates the 6 numbers

const generateNumbers = () => {

    for (let i = 0; i < 6; i++) {
        numberList [i] = (Math.floor(Math.random()* 30));
        // this inserts each random number into an array
    };
    console.log(`\nthe random number generated here are : ${numberList} \n`)

    numberList.forEach(element => {
        if (element % 7 == 0) {
            console.log(`\n this number : [${element}] is divisable by 7`)
            console.log("-----------------------------------------------------")
        } else {
            console.log(`\n this number : [${element}] is not divisable by 7`)
            console.log("-----------------------------------------------------")
        }
    });
}
generateNumbers();

// this was so tricky by I managed to work it out