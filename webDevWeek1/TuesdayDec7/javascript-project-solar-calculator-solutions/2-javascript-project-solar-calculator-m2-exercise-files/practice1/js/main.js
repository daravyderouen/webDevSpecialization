// JavaScript Document
//step 4, before this refer back to Word document 
//alert('Hello World from Me')//gets an alert in browser
//JavaScript is executed from top to bottom

//step 5 Now we write it in a function 

function test () {
    alert('Hello World from Me');//alert isn't triggered because it's hidden inside of a function

}

//step 6 calling the function in line 14
//test ();//alert pops up in browser when this is called
//line 14 calls line 8, line 8 triggers line 9 and line 9 gives us the pop up

//another way to do it is from the html// 
//so for step 7 go to folder 2, index.html//
//uncomment line 14//

//step 8//
 
// function test () {
//     console.log('%c Hello World from Me', "font: 50px sans-serif; font-weight:bold; color:teal; -webkit-text-stroke:1px black;") //added styling to our console.log
// }//doing it this way will only allow us to see it as developers but not others

//step 9//
// function floor () {
//     var diameter = 10;//step 12 added this line
//     var radius = diameter/2; //step 13 replaced "4" and added in "diameter/2"
//     var floorArea = Math.PI *(radius * radius);
//     console.log(floorArea);
// }

// //step 10// Calling the function
// floor();
//step 11// Go back to index.html and change the heading to "Practice 2"
//step 13 we're going to put the #8 in floor(8) so the function will look like below:

function floor (diameter) {//put diameter in the parameter
    var radius = diameter/2;//took out the diameter line before radius line
    var floorArea = Math.PI * (radius * radius)
    console.log(floorArea);
}
//Now calculating the area for the walls// step 14
function walls () {
    var diameter = 10;
    var height = 8;
    var radius = diameter/2;
    var circumference = 2 * Math.PI * radius
    var wallArea = circumference
    console.log(circumference)
}

floor(10);
walls(); //step 15
