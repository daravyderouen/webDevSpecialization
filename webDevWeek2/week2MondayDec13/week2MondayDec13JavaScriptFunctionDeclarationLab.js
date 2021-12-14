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
// > countE () now if we call our countE function, with no parameters, we would get a small pop up window from out website that says, which phrase would you like to examine? If we do "Excellent elephants" which has a few "E"s in it, you can see. Once we enter that phrase, the countE function will proceed, there's 5 E's in excellent elephants. 

///// TRACING OUR E-COUNTER  //////

// Following our function's code as it counts E's in "Excellent elephants!"
//index//Loop: index < length// charAt(index)//is charAt(index) an E or e? // eCount//
// 0   //    TRUE           //     E        //             True           //    1
//  1 //      TRUE          //     x        //            FALSE           //    1  //
// 2  //       TRUE         //     C        //            FALSE          //    1   //
// 3  //      TRUE         //      e        //             TRUE          //   2   //
// 4 //       TRUE         //     l         //            FALSE          //   2   // 
// 5 //       TRUE         //     L         //             FALSE         //   2   // 
// 6 //       TRUE         //      e        //             TRUE           //   3   // 
// 7  //       TRUE        //      n        //             FALSE          //   3   //  

/////////////// and so on

// 18 //       TRUE        //      s        //             FALSE           //  5   // 
// 19 //       TRUE        //      !         //             FALSE           //  5   //
// 20 //       FALSE       //      STOP !!!!!---------------->

/*  The first thing that will happen is that we check whether the index is less than    the length so that we don't go over the edge of the string. 
    For index 0, it's true, the character at that index is a capital E. So when we ask the question is the character at that index a capital E or lowercase E, we get a truth value from out complex conditional, so our eCount is instantly turned to 1 . */

/*As the loop continues, this procedure will occur for every character, including spaces and punctuations. And when we finally get to the index that just passed the end of the string, we get a false value from the loop condition and stop the loop. The function will instantly return an eCount of 5. */


//////////////// UNDERSTANDING LOCAL AND GLOBAL SCOPE   /////////////////

//        VISUALIZING WORLD WITHIN WORLDS              //


let x = 6;  // x & y up here, in the main program, the scope is "global", which means the variables declared are potentially accessible from everywhere. 
let y = 4; 

function add (a, b) {
    let x = a + b;  // but here: inside functions, the scope is "local", like cities within state. EAch has their own "government" and stuff happens in here stays here.
    return x;
}

function subtract (a, b) {
    y = a - b;
    return y;
}

// You can think of global and local scope being like the the global planet Earth having many nations. And within each of the nations, they have their own government and their own way of doing things. 


////////////// FUNCTIONS CREATE A NEW lOCAL SCOPE   //////////////////

//    Variables declared in a function STAY in the function //
// IE//
let x = 6//outside the function, declare variable equal to 6
function add (a, b) { //but inside new function add, 
    let x = a + b;//<-- renamed new variable x and set = to parameters a + b
    return x; // a variable keyword on that x
}
// when that happens in a local scope, an entirely new variable is created with the name x that is only accessible to the function block for add. So here you can see that if we called the add function and passed in the value 9 and 2, add itself would return 11

add(9, 2); //prints 11

/* BUT  if we console.log(x)<--variable 'x', we would still get 6 and that's because the internal variable x that got set that got equal to a + b did not modify the variable. */

/*The circled variable only exists in the function's local scope. Because it has been declared with let, it doesn't modify the same named variable "outside" the function. */

//// Need to becareful in JavaScript because if you don't declare the variable 'x', JS thinks that you mean the global variable on the outside of the function. 

// i.e//
let x = 6 // here x is still declared outside the function 
function add (a, b) {
    x = a + b;// but inside we no longer have a declared new variable x and instead just used the name x. 
    return x; 
}
add (9, 2) // if we call the add function here with 9 and 2, the add function    would return 11  
console.log(x) // when we log out the x variable, its value has been changed to 11

// It is important to declare your variables carefully and know the relationship between the local and global scopes in JavaScript.

// If the x were not declared with let, it would "shadow" the same-named variable from the nearest external scope.




//////////// VISUALIZING LOCAL AND GLOBAL SCOPE     //////////////
//      worlds within worlds     ///

let x = 6; 
let y = 4; 
function add (a, b) {
    let x = a + b;
    return x;
}
function subtract (a, b) {
    y = a - b;
    return y;
}

/* PROGRAM */
/* variables: x, y */
/* functions: add, subtract */

// add//
// parameters:
// a(local), b(local)

// variables:
// x(local)

// If our program had the variables x and y and the functions add and subtract. We know that the add function would create its own local scope with the parameters a, which is local to the function.

//subtract//
// parameters:
// a(local), b(local)

// variables:
// y(global)

// Now lets take a look at the subtract function, it also has local parameters a and b. But when it uses the variable y, it is the global variable y that it modifies. How can we tell that in the code? There is no variable keyword next to the y inside of subtract.






//// PROBLEM SOLVING WITH FUNCTIONS 1 /////
/*
The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population. Each sheep needs 2 lbs of ranger-provided food per day. We need a function to alert how many lbs of food each Park Ranger should load that day, based on the number of sheep and the number of rangers available.


Let's start by building a function called feedPerRanger. This function should accept two parameters: one representing the current population of sheep, and one for the number of rangers available during the day.


Inside the function, multiply the sheep population by 2 and divide it by the number of rangers. Assign the result to a new variable called feedPerRanger.

Finish coding the function by displaying an alert with the following format:

Each ranger should load *number* lbs of feed today.

Replace *number* with the value for the variable feedPerRanger.
 
 */

function feedPerRanger (a, b) {
    let feedPerRanger= (a*2)/b 
    alert("Each ranger should load" + feedPerRanger + "lbs of feed today.")
  }    
  


  ////// PROBLEM SOLVING WITH FUNCTIONS II //////////

  /*
  Back at the Hoover Dam, the technicians have decided they want more control of which generators are _on_ and off. They’ve asked us to develop a way to adjust the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.


  Define a new function named changePowerTotal that takes the following four parameters:

The total power generated.
The generator _ID_ for the current generator.
The generator status.
The amount of power produced by the current generator.

Inside the function, add an if statement checking if the status is equal to the string "on".


If the status is "on", add the amount of power for that generator to the total power generated and display an alert in the following format:

Generator #2 is now on, adding 62 MW, for a total of 62 MW!



Now let's add an else if statement that will run if the current generator status is "off".


If the current generator's status is "off", subtract the amount of power for that generator from the total power generated and display an alert in the following format:

Generator #2 is now off, removing 62 MW, for a total of 0 MW!



Finally, return the total power generated.

  
  */

function changePowerTotal (total_power, generatorID, generatorStatus, amount_of_power) {
    if (generatorStatus == "on"){
      generatorID = amount_of_power + total_power
      alert("Generator 2 is now on, adding" + amount_of_power + " for a total of" + total_power)
    } else {
    if (generatorStatus == "off") {
        generatorID = amount_of_power - total_power 
          alert(" Generator 2 is now off removing" + amount_of_power + "for a total of" + total_power+"!")
        
      }
      total_power = generatorID - amount_of_power
    }return total_power;
  }