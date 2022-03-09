//variables
let blinker; //the blinking dot on a page
let inputField; //the input field where the user types things
let userInput; //the actual user input
let option; //our placement on the map
let route //our route through the game - array

const whatToDo = (userInput) =>{ //function
    userInput = userInput.toLowerCase();
    switch(userInput){
        case "yes":
        case "y":
            console.log("You typed in yes");
        break;
        case "no":
        case "n":
        case "nope":
            console.log("you typed in no");
        break;
        case "help":
            console.log("you typed in help");
        break;
        case "storage":
        case "see storage":
            console.log("you typed in storage");
        break;
        default:
            console.log("Sorry, I don't understand.")
    }
}