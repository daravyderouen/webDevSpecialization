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


/// Challenge A Basic Multiplication Function //
function multiplyTrio (a, b, c) {
    return a*b*c;
  }
  
  multiplyTrio(3, 4, 5);


  // MORE DECLARATIONS //
  function maxOfTwo(a, b) {
    if(a > b){
      return a
    } else {
    } return b
  }

// Refactoring for Efficiency and Legibility //
//Let's refactor our mystery function. The result will remain the same but the implementation will now use one statement, instead of multiple statements.

//Rewrite the body of the mystery function so that there is a single return statement and no declared variables.

  function mystery(x, y) {
    //let a = 4 * x * y;
    //let b = 3 * y + 5;
    //let c =(4*x*y)+(3*y+5);
    return (4*x*y)+(3*y+5);
  }




  ///// NOW FOR A MORE COMPLEX FUNCTION! ////

  // LET'S DESIGN A FUNCTION THAT COUNTS "E"s IN A USER ENTERED PHRASE//

  // We'll combine the built-in-function of level 5 with with our declared function of level 6.

  // first establish a function key word with out new functions name. 


  function countE () {//this fn don't need parameters
    // ask user for a phrase to check
    /* then if that entry is invalid- */ { //(ALWAYS CHECK THAT  A USER INPUT IS VALID BEFORE ANY OPERATIONS)
    // ALERT THE USER
    //EXIT FUNCTION with a failure report <-- use the return keyword here will allow us to exit and inform the program of an invalid entry
  } /* otherwise, if the entry is valid */{ //<- this block will be where the function begins to actually check the phrase out and count the E's 
    //* make a counter for the E's*/
    /* for each character in the user's entry*/{
    /*if that character is a capital 'E' or a lowercase 'e'*/{ // *increment the E encounter

            }
    //(then have a for loop that goes over each character in the user's entry.)
        }
        /*alert the amount of E's in the phrase and return success*/
    }

}

// FILLING THE COUNTE() WITH CODE //
// HOW CAN WE GET THE BEHAVIOR WE'VE DESCRIBED IN OUR PSEUDO FUNCTION?
// we'll establish a variable called phrase and assign to that the results of a prompt function that  

function countE () {
    let phrase = prompt("Which phrase would you like to examine?")
    /*The prompt() method helps us get the user's entry */
    /*Then if that entry is valid,we will know because the phrase variable is a string.  */
    if(typeof(phrase) != "string"){
    /*The typeOf keyword allows us to determine whether the user has entered a valid string. This != expression returns true or false */
        alert("That's not a valid entry!");
        return false; // if the entry is not a string, wer alert the user and exit the function, returning false.
    } else { // else-block helps us do the "otherwise" case!
            let eCount = 0; //establish a variable called eCount that gets set to the value 0, because we don't know how many E's are in our phrase.
            for(let index = 0; index < phrase.length; index++){ //we make the for loop which will start at the very first index of the phrase. 
                /*(index<phrase.length)<-- we want to start at index 0, and go until one less than the length of the user's string. Remember that strings have zero-based indices */
                if(phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') {
                    eCount++;
                    /*inside the loop, we have a complex confitional  (phrase.charAt(index)=='E' <-- This comples conditional checks whether the spot we're currently at along the string is either an E or an e.)*/
                }
                /*eCount++ <-- if we found one, we'll increase our counter. */
                //once that loop is entirely complete, we will have the     amount of E's in that phrase. 
            }
            alert("There are"+ eCount +"E's in \"" + phrase + "\".");
            return true;
        //After our for loop, eCount will contain the total number of E's and e's in our loop. Then we can return true which instantly exit the function.
    }   
    
}
  

// rewrite the function//
function countE () {
    let phrase = prompt("Which phrase would you like to examine?");
    if(typeof(phrase) != "string") {
        alert("That's not a valid entry!");
        return false;
    } else {
        let eCount = 0;
        for(let index =0; index <phrase.length; index++) {
            if(phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E') {
                eCount++;
            }
        }
        alert("There are" + ecount + "E's in \"" + phrase + "\".")
        return true;
    }
}

// THE SEQUENCE OF ENTRY //
// > countE () now if we call our countE function, with no parameters, we would get a small pop up window from out website that says, which phrase would you like to examine? 