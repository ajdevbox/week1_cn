
//=======================================================================

// Activity 

// //Display string
// //change to uppercase 
// //find the 8 character

// // console.log('All Around the World'.charAt(7).toUpperCase());

//=======================================================================

// Activity 

// // let give the variable a name that represents somthing meaningful
// // const this will not change
// // var = old legacey code not to be used

// // let myName = 'Ahia'
// // let myAge = 42
// // let gotAHeadache = true
// // const bornIn = 'Liverpool'

// // console.log(myAge);

//=======================================================================

// Activity 

// // let balance = 100
// // let withdrawAmount = 20

// // balance = balance - withdrawAmount // this will update the balance based on the calculation
// // console.log(balance);

// // ==========================

// // let favouriteDrink ='coffee';

// // console.log('My favourite drink is ' + favouriteDrink);

//=======================================================================

// Activity 

// // let myName ='Ahia'
// // let age = 42
// // let favDrink ='Coffee'

// // console.log(`My name is ${myName} I am ${age} and I love ${favDrink}`);

// // let myName ='Ahia'
// // let age = 42
// // let favColor ='Green'

// // console.clear();
// // console.log(`\n My name is ${myName} I am ${age} and I love the colour: ${favColor} \n `);

// // // updated variables 

// // myName = 'Jason'
// // age = 19
// // favColor = 'Silver'


//=======================================================================

// Activity 2

// // let breakfast ='Toast'
// // let lunch = chicken salad
// // let dinner ='Green'

// // console.log(`My name is ${myName} I am ${age} and I love ${favColor}`);

//=======================================================================

// Activity 1

// // Create a program that stores someone’s name, 
// // age and favourite colour and log it to the console 
// // in a complete sentence using Template Literals.

// let userName ='Ahia'
// let userAge = 42
// let userFavColor ='Green'

// console.clear();
// console.log(`\n My name is ${userName} I am ${userAge} and I love the colour: ${userFavColor} \n `);

// //update varibales

// userName ='Sam'
// userAge = 19
// userFavColor ='Blue'

// console.log(`\n My name is ${userName} I am ${userAge} and I love the colour: ${userFavColor} \n `);

//=======================================================================

// Activity 2

// Create a program that stores what you eat today 
// for breakfast, lunch and dinner. Log these to the 
// console.

// let breakfast ='Egg and Toast'
// let lunch = 'Cheese Salad'
// let dinner ='Chicken Kebab and Rice'

// console.log(`For breakfast I had ${breakfast}, for lunch is was ${lunch} and for dinner is was ${dinner} \n`);

// //update varibales

// breakfast ='Toast'
// lunch = 'spicy lentil soup'
// dinner ='lamp chops'

// // console.log(`For breakfast I will have: ${breakfast}, for lunch it will be : ${lunch} and for dinner i fancy: ${dinner} \n \n`);


//=======================================================================

// Activity 3

// Create a program that calculates the number 
// of days from today to your birth date. 

// // store the varaible for todays date nad birthday
// let today = new Date();
// let mybDay = new Date ('May 28, 1980');
// let daysaLive = Math.floor((today - mybDay)/(24 *60 *60 *1000))
// let yearsAlive = Math.floor(daysaLive / 365)

// console.clear();

// console.log('\n');

// console.log(`number of days alive: ${daysaLive} days \n`);
// console.log(`number of years alive: ${yearsAlive} years`);
// console.log('\n');

//=======================================================================

// Activity 4

// > Create 9 variables: space1, space2… space9. 
// > Assign either the value ‘x’,’o’,’ ‘, to each of 
// these variables.
// > Insert the variables into your board using the 
// ${varName} syntax and make it look like the 
// displayed board.

// let spaceOne = "   |   |  "
// let spaceTwo = " x | o |  "
// let spaceThree = " x | x |  "
// let spaceFour = " o |   |  "
// let spaceFive = "----------"

// console.clear();
// console.log(`\n${spaceOne}\n${spaceTwo}\n${spaceOne}\n${spaceFive}\n${spaceOne}\n${spaceThree}\n${spaceOne}\n${spaceFive}\n${spaceOne}\n${spaceFour}\n${spaceOne}`);