// let weather ='sunny'

// if (weather=='sunny') {
//     console.log('Better wear sunscream')
// } else if (weather=='rasiny'){
//     console.log('Take a brolly')
// }else {
//     console.log('It could go either way')
// }

//==============================================================
// Activity 1 

// //Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater 
// than 17 and else logs “You aren’t old enough”

// let age =19

// if (age>17){
//     console.log("\nYes I can serve you \n");
// } else {
//     console.log("\nYou are not old enough \n");
// }

//STREACH CHALLENGE

// let age =19
// let country="USA"

// if (age>=17 && country=="USA"){
//     console.log("Yes I can serve you");
// } else {
//     console.log("You are not old enough");
// }

//===========================================================

// // Activity 2
// // Create a variable for any pizza topping. 
// // Create a switch statement,  

// let favTopping = "ham"
// let othertopping ="pepperoni";

// switch(true) {
//     case "ham"==favTopping:
//         console.log("\nThese are important ingredients for my pizza \n");
//         break;
//     case "pepperoni" ==othertopping:
//         console.log("\nI dont mind these toppings \n");
//         break;
//     default:
//     console.log("\nshould not be on a pizza \n");

//}

// ==========================================================

//Activity 3 
// Create a variable called password. 
// Check how many letters are in the password, if there are 
// less than 8, log to the console that the password is too 
// short. Otherwise log the password to the console

// store password as a variable
// check the length of the string
// if more than 8 characters log result and confirm 
// else display message too short

// console.clear();

// let myPassword = "1125Monday"

// if (myPassword.length >7){

//     console.log(`\nYour password is ${myPassword} \n`);
// } else {
//     console.log('\nYour Password is too short \n');
// }

// ==========================================================

//Activity 4 

// Create a variable called num. 
// Check if the variable is divisible by 3 or 5. If it 
// is, log “This number is divisible by 3 or 5”. 
// Otherwise log something else. 

// console.clear()

// let input = 5;

// const byThree = input % 3;
// const byFive = input % 5;

// // console.log(`${byThree} \n ${byFive}`);
// console.log(`${byThree} \n ${byFive}`);

// if (byThree % 3 === 0 || byFive % 5 === 0) {
//     console.log('this number is divisable by 3 or 5')
// } else {
//     console.log('this number is NOT divisable by 3 or 5')
// }

//============================================================

// Activity 5:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s divisible by 
// 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
// “fizz buzz” to the console. Otherwise log num to the console

// let num = 1

// let fizz = num % 3
// let buzz = num % 5

// if (fizz % 3 == 0) {
//     console.log("\nFizz");
// } else if (buzz % 5 == 0) {
//         console.log("\nbuzz");
//        } 
// else if (fizz % 3 == 0 || buzz % 5 == 0){
//        console.log("\n Fizz Buzz");
// } else {
//     console.log(`Your Number is ${num}`);
// }

//-----------------------------------------------------------------

// Activity 6:

// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202).

// let num = 1001

// let convertToText = num.toString();

// const isapalindrome = convertToText.split('').reverse().join('');
// if (isapalindrome === convertToText){
//     console.log(`\n${isapalindrome} is a palindrome welldone \n`)
// } else {
//     console.log(`This : ${isapalindrome} is not a palindrome please try again\n`)
// }

//--------------------------------------------------------------

// Activity 6: - Another version as function 

// Create a variable called num.
// Check if the number is a palindrome (looks the 
// same forward as it does backwards e.g. 1001 or 
// 20202).

// let num = 2002

// let convertToText = num.toString();

// const isapalindrome = () => {
    
//     const check = convertToText.split('').reverse().join('');

//     if (check === convertToText){
//     console.log(`\n${convertToText} is a palindrome welldone \n`)
//         } else {
//     console.log(`${convertToText} is not a palindrome please try again\n`)
//         }
//     }

// isapalindrome();

//----------------------------------------------------------------------------

// Activity 7
// Create a variable called time, a variable called placeOfWork 
// and a variable called townOfHome. Create an if statement that 
// logs to the console where someone is at times of the day. E.g. if 
// the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// let timeOfDay = 9

// let placeOfWork = "Chester";
// let townOfHome = "Wavertree";

// if (timeOfDay <= 7) {
//     console.log(`I am at my home in ${townOfHome}`);
//     } else if (timeOfDay >=9 && timeOfDay<=16) {
//         console.log(`I am at work in ${placeOfWork}`);
//     } else {
//     console.log(`I am commuiting`);

// }

//----------------------------------------------------------------------------

// // Activity 8

// // Take the string 
// // “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// // gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the 
// // index of a last vowel in the string.

// let myString ="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// //console.log(`\n${myString}\n`);

// const lastVowel = myString.lastIndexOf("e");
// console.log(lastVowel);

//----------------------------------------------------------------------------

// // Activity 9

// //Create a variable called word that takes a string. Create 
// //an if statement that checks if the last letter is the same as 
// //the first. If it is return true, otherwise return false.

// let word ="eye";

// let firstLetter = word.charAt(0)
// let lastLetter = word.charAt(word.length -1)


// const result = () => {

// if (firstLetter === lastLetter) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// }
// console.log(firstLetter);
// console.log(lastLetter);

// result();

//----------------------------------------------------------------------------

// // Activity 10
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together

let num1 = 9
let num2 = 2

result = num1 + num2;
result2 = num1 * num2;

if (result % 2 == 0) {
    console.log(`number is even ${result}`);
} else {
    console.log(`\nnumber is odd so we have multiplied the numbers : ${result2} \n`);
    
} 

