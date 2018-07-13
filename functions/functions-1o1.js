//function - input, code, output


let greetUser = function(){
    console.log('hello');
}

greetUser();

let square = function(num){
    let result = num * num;
    return result;
}

let value = square(3);
let valueTwo = square(10);

console.log(value);
console.log(valueTwo);


let convertTemp = function(fahrenheit){
    let celcius = (fahrenheit - 32)/ 1.8;
     return celcius;
}


let tempOne = convertTemp(32);
let tempTwo = convertTemp(68);

console.log(tempOne);
console.log(tempTwo);