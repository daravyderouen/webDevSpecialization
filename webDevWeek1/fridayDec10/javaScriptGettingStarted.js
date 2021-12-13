//PROGRAM FLOW

//CONDITIONAL USING if()

// if () Statement
// if (5 === 5) {  //we are comparing so we use 3 equal signs
//     console.log('Yes') prints true
// }

// if (5 > 10) {
//     console.log('No'); //false and will not console.log anything because it's false
// }

// if (5 >= 5) {
//     console.log('Yes'); //prints Yes
// }


//           if () Statement

// let state = 'FL';
// let taxPercent = 0;

// if (state === 'FL') {   //if state is equal to Florida
//     taxPercent = 7;     // we want to set taxPercent to 7 and the condition is true
//                         //TaxPercent will be set to 7 and when we log out TaxPercent, we get 7.
// }  
// //So here we're comparing a variable to a strength. Again, we're using the 3 equal signs. It is a very common bug to use a single equal sign or double equals, make sure that in our conditionals WE USE THREE EQUAL SIGNS!!!

// console.log(taxPercent); //prints 7

// in this example we are checking for an inequality not equal to, we do that with the exclamation point (!), and two following equals signs. 
// let state = 'FL';
// let taxPercent = 7;

// if (state !== 'FL') {   //so if the state does not equal to Florida, 
//     taxPercent = 0;     // we set the taxPercent to 0
// }

// console.log(taxPercent); //prints 7 
// //when we log out the taxPercent, we get 7 but the key takeaway is that the not double equals sign checks for inequality. 

// if (1===1) {
//     showMessage('true'); //prints true
// }


// if (1===3) {
//     showMessage('true'); //doesn't print anything because it's false
// }

// let price = 20; 
// if(price>15) {
//     showMessage('discounted'); //prints discounted
// }

 ///             ****  TRUTHY AND FALSY   ****      ///

//  if (1.1 +1.3 !== 2.4) {    //prints true because it's a floating number here 
//      console.log('true');    even though it does equal 2.4
//  }

 if(+(1.1+1.3).toFixed(2) !== 2.4) {    //now it's set as an object
     console.log('true');              //.tofixed returns a string so add a (                                   +) before the parentheses
 } //the plus sign has the benefit of converting a string to a number
 //so when you run the code it does not print.
 //when working with floating point number, always convert the floating point number, if you don't do this than your calculations could be off. The plus sign is a simple way to convert a string returned by .toFixed back into a number. 


 //We can put as many lines of code as much as we like. 

 if(+(1.1+1.3).toFixed(2) !==2.4) {
     let message = 'hello';
     showMessage(message)
 }
 //We can also put if statements within other if statements.