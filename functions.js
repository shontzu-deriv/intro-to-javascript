// //Declaring a function
// function getReminder(today){
//   console.log('Water the plants on ' + today + '.')
// }
// getReminder('Tuesday');
// getReminder('Wednesday');


//Function Expression
// const plantNeedsWater = function(day) {
//   if (day === 'Tuesday' || day == 'Wednesday') {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log("Monday: " + plantNeedsWater("Monday"));
// console.log("Tuesday: " + plantNeedsWater("Tuesday"));
// console.log("Wednesday: " + plantNeedsWater("Wednesday"));
// console.log("Thursday: " + plantNeedsWater("Thursday"));


// Arrow function
// const plantNeedsWater = (day) => {
//   if (day === 'Tuesday') {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(plantNeedsWater("Monday"));


// arrow function vs normal function use case
// in this scenario, 'me' is an object with property 'name' and methods 'thisInArrow' and 'thisInRegular'
let me = { 
 name: "Ash", 
 thisInArrow:() => { 
 console.log("My name is " + this.name); // no 'this' binding here 
 }, 
 thisInRegular(){ 
 console.log("My name is " + this.name); // 'this' binding works here 
 } 
};

me.thisInArrow(); // name is undefined
me.thisInRegular(); // my name is Ash