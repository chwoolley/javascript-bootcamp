// global scope (convert farhenheit to celcius, tempOne, tempTwo)
    // local scope (fahrenheit, celsius)

let convertTemp = function (fahrenheit) {
    let celcius = (fahrenheit - 32) / 1.8;

     if (celcius <= 0) {
         let isFreezing = true;
     }
    return celcius;
}


let tempOne = convertTemp(32);
let tempTwo = convertTemp(68);

console.log(tempOne);
console.log(tempTwo);