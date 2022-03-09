'use strict';

let box =document.getElementById("likeBox")
// Grab the element with id="likeBox" and store it in a variable
let heart = document.getElementById("heart")
// Grab the element with id="heart" and store it in a variable
let liked = false
// Create a variable to store the boolean value false - it is to help us tell whether the image has been liked or not

/* Create a function that is to toggle the color of the heart
* Inside the function, create a conditional statement
** if the boolean value of the 3rd value is true, change the color of the 2nd variable to red
** if not, change the color of the 2nd variable to black
*/
const changeColor = () => { 
    if (liked){
        heart.style.color="red";
    }else {
        heart.style.color="black"
    }
    } 

/* Create a function that is to switch the boolean value of the 3rd variable
* Inside the function, create a conditional statement
** if the value of the 3rd variable is true, set it to false
** if not, set it to true
* Outside the conditional statement, but still inside the function, call the function that is to toggle the color of the heart
*/
const changeBoolean = () => { 
    if (liked){
        liked = false;
    }else {
        liked = true;
    }
    changeColor()
    } 

// Add an event listener to the 1st variable making it call the function above when doubleclicked (dblclick).
box.addEventListener("click", changeBoolean)