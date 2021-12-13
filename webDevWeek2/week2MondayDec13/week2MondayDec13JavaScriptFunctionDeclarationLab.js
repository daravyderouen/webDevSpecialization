// DECLARED FUNCTIONS//

//WHAT IS A FUNCTION FOR?//


// INPUT --> FUNCTION ---> OUTPUT //
// GIVE THE FUNCTION SOME INPUT, IT WILL DO SOME WORK ON THAT INPUT, AND THEN IT WILL OUTPUT SOMETHING ON THE BACK END OF THE FUNCTION AS A RESULT. 

// A FUNCTION WILL SOLVE PROBLEMS FOR DEVELOPERS. 
// It will do something step by step that we need to do repeatedly


//////// FUNCTION: The Sum of Two Cubes  //////////
// 1. Get two numbers  ---->  4     9
// 2. Cube each number ----->  (4^3) -> 64  (9^3) -> 729
// 3. Sum the cubes  ---------> 64 + 729 = 793
// 4. Last step, Return the answer  ----> 793 (is the output of our function)

// WHAT ARE THESE STEPS IF WE WERE TO WRITE CODE?//
// 1. SYNTAX FOR FINDING A SUM OF CUBES
// 4 ------> let a = 4; 
// 9 ------> let b = 9;
// The first step of getting 4, we should establish a variable "a" and set it equal to 4. 
// Then we would do the same thing for 9, but we would establish the variable as B. 

//Then when we want to start cubing of the values, we'll start with 4 cubed = 64, 
//   (4^3) = 64 ------->  let aCubed = a*a*a;
// Then do the same for bCubed
//   (9^3) = 729 ------->  let bCubed = b*b*b;

// So at the end of our function we would have 793 as the output. Without a function, we'd have to write the above code a lot. 

////////// USEFULNESS THROUGH REUSABILITY /////////
//    WRAPPING OUR CODE IN A FUNCTION WILL ALLOW US TO REUSE IT.   ///

// When we put 4 & 9 ------> FUNCTION Sum of Two Cubes -----> 793 is the output 

// But when we put 5 & 6 ----> FUNCTION Sum of Two Cubes ----> 341 is the output 


//////////// FUNCTIONS IN JAVASCRIPT CODE /////////////

// THE SYNTAX FOR A BASIC FUNCTION STRUCTURE //

// Start function with the actual keyword Function 
// function keyword tells the complier that you are beginning to write a process in a function.

// We also need two braces that enclose the entire function into a code block. The "process" portion of the function is enclosed in the curly braces. 

// Next we have to title the function. The function's name follows the function keyword and should indicate briefly what's going on in the process. 
// In the example below, we call it sumOfCubes 

// Parameters are passed in a set of parentheses before the first curly brace. They are the "materials" the function will "work on". 
// Here, because we have two inputs to our function, we have two parameters, a and b. You can think of these two parameters, basically inputs to the function, as the materials that the function either uses or does work on to produce the output you're looking for. 

// Inside the braces, the function will do some stuff

// function sumOfCubes (a, b) {
//     //*do some stuff* <------ inside the braces, the    process occurs. In other words, the function does what it is intended to do.
//     //return *something(or nothing) from the process*
// }
// //At the end of sumOfCubes function, we'll have to return something or nothing from the process. That RETURN keyword tells the function "Give us the result of what we need", it is done. It can be used anywhere in the function to stop function's work. Here, that happens to be at the very end. 


////////////// BUILD OUT SUMOFCUBES FUNCTION ///////////

// Assigning steps of the process to the function syntax//
// The steps below is what goes on inside function//
// 1. Get two numbers(a, b) <---- parameters
// 2. Cube each number 
// 3. Sum the cubes
// 4. Return the answer 

// function sumOfCubes (a, b) /*1. Get two numbers */ {
//     // 2. Cube each number
//     // 3. Sum the cubes
//     // 4. return Sum <--------- RETURN THE ANSWER

// }

// NOW LET'S TRANSFER ACTUAL SYNTAX INTO THOSE STEPS //

function sumOfCubes (a, b) { // once the parameters are passed into the function, they are accessible at any point within the process. 
    let aCubed = a*a*a;
    let bCubed = b*b*b;
    let sum = aCubed + bCubed;
    return sum;
}

// Now we can call the function using any parameter values we want by calling the function's name followed by a set of parentheses within which we place the parameters for our function.//

console.log(sumOfCubes(4, 9)); // prints 793

// We can use it in an assignment expression. //
//If we wanted to make a variable, mySum, 

let mySum = sumOfCubes(5, 6);


console.log(mySum); // prints 341 


////////// WRITING EFFICIENT FUNCTIONS ////////

// BEING CONCISE HELPS CONSERVE MEMORY AND LIMITS STORAGE OPERATIONS

function sumOfCubes (a, b) {
    let aCubed = a*a*a;
    let bCubed = b*b*b;
    let sum = aCubed + bCubed;
    return sum;
    // our function does what it is suppose to, but it is not as efficient as it could be memory wise. We've made three necessary variables that all have to be allocated in memory. 
}

// just return aCubed + bCubed
// the return keyword can calculate the results of an expression before actually returning from the function. One variable down. Now we don't need a sum variable anymore. If that is true we don't need a bCubed variable. 

// thus we can just write return a*a*a + b*b*b; <-- one statement

// Now we eliminated 3 different variables and simplified our function

// OUR FUNCTION IN ACTION//

// CALLING A FUNCTION INVOLVES THE FUNCTION NAME AND SOME PARAMETERS. 

function sumOfCubes (a, b) {
    return a*a*a + b*b*b
}

sumOfCubes(4, 9); // prints 793

// we can also pass in expressions as parameters, which the function will resolve before starting the actual function. 
sumOfCubes( 1+2, 3+5); // two expressions as parameters, same thing as sumOfCubes(3, 8) and it prints 539 as the output

// we can also use variables as parameters:
let x = 3
sumOfCubes(x*2, x*4); // this sumOfCubes would be the same as sumOfCubes(6, 12) prints 1494
