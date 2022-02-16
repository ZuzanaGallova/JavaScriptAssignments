/*
    Assignment 1
    There is some errors in the codepen example from the lesson
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    When the time is 20-22 the output should be: snacktime
*/
let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 7 && hour <= 11) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour > 11 && hour < 13 ) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour <= 17) { 
  textHolder.innerHTML = "Good afternoon";
} else if (hour > 17 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour > 19 && hour <= 22) { 
    textHolder.innerHTML = "It is snacktime";
} else {
  textHolder.innerHTML = "Goodnight";
}

/*
    Assignment 2 - follow up from assignment 1
    Copy the code from: https://codepen.io/dominoeffekten/pen/abVJGEr inside a HTML, CSS and JS file
    Change the time, so it fits your day. It could be:
    8-14: School
    11: Lunch
    and so on..
*/
let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 7 && hour <= 8) { 
  textHolder.innerHTML = "Good morning!";
} else if (hour == 11) { 
    textHolder.innerHTML = "lunch";
} else if (hour > 8 && hour < 14 ) { 
  textHolder.innerHTML = "school";
} else if (hour <= 17) { 
  textHolder.innerHTML = "chill";
} else if (hour > 17 && hour <= 19) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour > 19 && hour <= 22) { 
    textHolder.innerHTML = "movie time";
} else {
  textHolder.innerHTML = "Goodnight";}


/*
    Assignment 3
    write a program where the user can write 2 numbers and display the larger one
*/
let a=prompt("enter first number");
let b=prompt("enter second number");
if (a==b){
    console.log("the numbers are equal");
}
else if(a>b){
    console.log(a);
}
else if (a<b){
    console.log(b);
}
else {"error"};


/*  
    Assignment 4
    make a variable with 3 numbers and sort them with help of JS conditions
*/
let x=Math.ceil(Math.random() * 12);
let y=Math.ceil(Math.random() * 12);
let z=Math.ceil(Math.random() * 12);
if (x<y){
    if (z>y){
        console.log(x,y,z)
    }
    else if(z<x){
        console.log(z,x,y)
    }
    else {
        console.log(x,z,y)
    }
}
else if (x>y) {
    if (z>x){
        console.log(y,x,z)
    }
    else if(z<y){
        console.log(z,y,x)
    }
    else {
        console.log(y,z,x)
    }
}
else {
    if (z>y){
        console.log(y,x,z)
    }
    else {
        console.log(z,y,x)
    }
}