// undefined for variables.
let name
console.log(name);

name = 'harry';
//undefined is used to represent the lack of a value on a variable.

if( name === undefined){
    console.log('please provide a name');
} else {
    console.log(name);
}

// undefined for function arguements
// undefined as the function return default value
let square = function(num) {
    console.log(num);
}

 let result = square();

console.log(result);

//If we use undefined in this situation instead of null as below, we don't know if it the variable has been left unassigned or it's been cleared, so instead we use null when we see undefined we know it's a language default, when we see null, we know it's been explicitly cleared by the developer
let age = 27;

age = null
console.log(age);
