let words = ["Copy","Opportunity","Nope","Friends","Use","Saddle","Eden","Day"]

let message = words.map(item => {
    return item[0]
}
    );
    console.log(message);

let word = message.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    });
console.log(word);
