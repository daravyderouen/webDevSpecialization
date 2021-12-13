//THE CLIFFS OF VALUE
// ">" The JavaScript Prompt, aka "The Console"
//--> What gets returned from the code

//JavaScript automatically recognizes numbers
// >24 -> 24 , if we entered 3.14, we get 3.14

//Common Operators used in JavaScript Syntax:
//addition: > 6+4 -> 10
//subtraction: > 9-5 -> 4
//multiplication: > 3 * 4 -> 12
//division: > 12 / 3 -> 4
//modulus: > 43 % 10 -> 3, modulus returns the remainder after division

//JavaScript recognizes: ORDER OF OPERATIONS, PEMDAS(PARENTHESES, EXPONENTS, MULTIPLICATION, DIVISION, ADDTION, SUBTRACTION)

//GROUP EXPRESSIONS IN JAVASCRIPT
//> (5 + 7)*3 -> 12 * 3 -> 36

// >(3*4) + 3 - 12 /2 -> 12 + 3 - 12 / 2 -> 12 + 3 - 6 -> 9

// >(-5*6) - 7 * -2 -> -30 -7 * -2 -> -30 - -14 -> -16

// > 4 + (8 % (3+1)) -> 4+(8%(4)) -> 4+0 -> 4

// COMPARATORS-boolean value
//COMMON NUMBER COMPARATORS USED IN JS SYNTAX:

// > 6 >4 -> TRUE (greater than)
// > 9 < 5 -> FALSE (less than)

//We use a double equal sign to return a boolean value

// > 3 == 4 -> FALSE (equals)
// > 12 !=4 -> TRUE (not equals)
// > 8 >= -2 -> TRUE(greater or equal) 
// > 10 <= 10 -> TRUE(less or equal)


//**** VARIABLE VALLEY****/

//sTORING OUR VALUES
//JAVASCRIPT USES VARIABLES TO STORE AND MANAGE DATA

// > let trainWhistles = 3, basic assignment syntax

// let is the variable keyword. It's what tells the browser to set some space aside for the variable itself.
// trainWhistles is the variable name.
//The = sign is the assignment operator. It's a single equal sign. 
//The value 3 is last. That is the value that is going to be stored inside our variable trainWhistles.

// > trainWhistles (calling the variable's name now returns the value we stored)


// RULES AND REGULATIONS WITH NAMING VARIABLES
// let no space <-X :no space in name
// let 3blindmice <-X :no digits in front
// let scored_is_fine :underscores are okay, but often irritating
// let get$ :dollar signs are also cool, but don't 
// let $_$, slightly stupid but technically legal
// let goodNameHere <-- begin with lowercase, later words capitalized, "camel case"
// let mortalKombat2 <-- FATALITY!


///       CHANGING VARIABLE CONTENTS      //////
// WANT TO CHANGE A VARIABLE'S VALUE? 

// > let trainWhistles = 3        > trainWhistles  --> 3

// > trainWhiles = 9, we just reuse the assignment operator and set it equal to a new value. Notice that no "let" keyword this time, because JavaScript already knows about the variable. Now our trainWhiles value is 9. We can use the trainWhiles' value itself to modify the contents of the trainWhiles variable. 

// > trainWhiles = trainWhiles + 3
//  Here you can see that we're saying take the trainWhistles value, add 3 to it, and store it back inside the trainWhiles variable. Now, because the earlier value of the trainWhiles was 9, we get 9 + 3, which results in 12. 

//  Another way to say that exact same expression is with the += operator
// > trainWhiles += 3, this signals the console to take the trainWhiles variable, and add 3 to it and store it back inside the trainWhistles variable. 

// > trainWhiles = trainWhiles + 3 && > trainWhistles += 3, both of these expressions are the exact same operations but different syntax 
// now >trainWhistles -> 15, now we have 15 total train whistles. 

//All of the operations can be used with variable assignments. Here we can see that the trainWhistles variable is being multiplied by 2 before being stored back inside the trainWhistles variable.
// > trainWhistles = trainWhistles * 2  
// > trainWhistles --> 30, Now we have 30 train whistles. 

//Again, the *= operator is the exact same as previous expression 
// > trainWhistles *= 2  --> 60, we get 60 train whistles. 



//////////      USING VARIABLES     //////////////
//  Variable names also act as substitutes for the data they point to. That means that I can use variables inside of concatenations with strings to refer to the data that is actually inside the variable.

// > trainWhiles = 3
// > "All of our trains have" + trainWhistles + "whistles!"  (Here you can see a concatenation of all of our trains have with variable trainWhistles and then the string whistles. What happens in the output? All of our trains have 3 whistles)

//The variable name disappears, and instead, the data that the variable contains is placed inside the string. 

// Additionally, we can place variables inside of expressions that are concatenated with strings. In this string, when trainWhistles is multiplied by 3, we get 9, and in the final string, we see, "But the Pollack 9000 has 9!"

// > "But the Pollack 9000 has"+(trainWhistles * 3)+"!"

// the Pollack 9000 needs a variable of its own so we have to create a new variable. 

// > trainWhistles = 3
// > let pollack9000 = trainWhistles * 3  ---> 9
// now we can see that the pollack9000 has 9 train whistles

// Now that the pollack9000 has it's own variable, we can use that inside the string.

// > "But the Pollack 9000 has"+ pollack900 + "!"



////////  INCREMENTING & DECREMENTING      ////////
// A simples syntax for increasing or decreasing a variable's value by 1

// > trainWhistles = 3
// > trainWhistles++ : incrementing by +1  ---> 4
// > trainWhistles-- : decrementing by -1   ---> 2



/////////////// VARIABLE EXPLORATION ///////////////

// VARIABLES STORE STRINGS TOO!
// JavaScript can store anything in variables

// > let welcome = "Welcome to the JavaScript express line!"
// > let safetyTip = "Look both ways before crossing the tracks."
// Here we have a welcome variable, as well as a safetyTip variable. We can use both of those variables that contains strings in concatenation with a new line character to produce a specifically formatted string in the output of the console.

// > welcome + "\n" + safetyTip
// "Welcome to the JavaScript Express Line!"
// "Look both ways before crossing the tracks."


// VARIABLE NAMES CAN ALSO ACCESS THE LENGTH PROPERTY//
// If our variable contains a string, we can use .length property to access the length of that string instead of typing the entire string out. 

// > let longString = "I wouldn't want to retype this String every time."

// > longString.length (if we use the .length property on longString, we can see that it returns the value 49 as the length. )


/// COMPARING STRING LENGTHS USING LENGTH PROPERTY ////

// > let longWordOne ="antidisestaablishmentarianism"
// > let longWordTwo = "supercalifragilasticexpialdocious"

// we can use the greater than operator to ask whether the length of the first is greater than the length of the second. 

// > longWordOne.length > longWordTwo.length = FALSE (we're comparing two numbers returned by the length properties) Here, we get a result of false, because longWordOne is not longer than longWordTwo.



//// FINDING SPECIFIC CHARACTERS WITHIN STRINGS////

// EACH POSITION IN A STRING HAS A NUMBERED 'INDEX' STARTING FROM 0. 

// Here we have a variable called sentence and inside is a sentence. 
// > let sentence = "Antidisestablishmentarianism is fun to say!"
// A = 0, s = 8, the space between the first word and is is 28th index(spaces are characters too), and the exclamation point has an index of 42. The index number is distance away from the starting character that begins with 0. 

// if we took the length of this sentence variable using the .length property, JavaScript will return a 43. That's because string positions are 0 based, so there will be always one less index than the total length of the string. 

// > sentence.length --> 43


// *ANOTHER METHOD FOR STRINGS IS THE charAt method. **//

// > sentence.charAt(11) [The charAt method retrieves the character at the specific index.] ---> "b"

// > sentence.charAt(31) ----> contain a space character " ". JavaScript will return a space to your surrounded by two quotation marks. 

// > sentence.charAt(42) ---> "!"

// if you place an index inside the parentheses of the charAt method, JavaScript will return the character that's exactly at that index for you. So you can see that the 11th index would contain the letter b. 



////////// VARIABLES HELP ORGANIZE DATA////////////
// VARIABLES ARE ESSENTIALLY THE FOUNDATION OF PROGRAMMING///

// CREATE VERSATILE MESSAGE OUT OF FLEXIBLE PIECES//

// > let trainsOperational = 8 
// > let totalTrains = 12
// > let operatingStatus = " trains are operational today."
// > trainsOperational + "out of" + totalTrains + operatingStatus

//Let's say we'er designing a train system and we have a certain amount of operational trains out of a certain amount of total trains. Let's see how we can make a message to print to the user at the console about how many running trains there are today. //

// If we wanted to make our message using these particular variables. We could do transOperational concatenated with out of, then the variable totalTrains, and then the operatingStatus message. Together, those would produce "8 out of 12 trains are operational today."

// Say we had to run the train system message again the next day, but there was a different amount of trains that were operational. We can change the trainsOperational variable to the value of 10. Now when the message gets printed to the user, we get line 204.

// CREATE VERSATILE MESSAGE OUT OF FLEXIBLE PIECES//

// > let trainsOperational = 10
// > let totalTrains = 12
// > let operatingStatus = " trains are operational today."
// > trainsOperational + "out of" + totalTrains + operatingStatus

// "10 out of 12 trains are operational today."