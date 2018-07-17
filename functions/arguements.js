let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5)
console.log(result);

// adding a default value to arguements if none provided




let getScoreText = function(name = 'player', score = 0){
   return 'Name: ' + name +', Score: ' + score;


};

let scoreText =getScoreText(undefined, 99);
console.log(scoreText);




console.log("andrew");

// template string
let name = "Hurrro"
let fuckyou = "what the fuck are you talking about"
console.log(`Hey my name is ${name}! here is all this text, ${fuckyou}`);


// heres an example of template strings
let getScoreTexttwo = function (name = 'player', score = 0) {
    return `Name: ${name}, Score: ${score}`;
    // return 'Name: ' + name + ', Score: ' + score;


};

let scoreText2 = getScoreTexttwo(undefined, 99);
console.log(scoreText2);

let getTip = function (total, tipPercent = .2) {
    let tipCalc = total * tipPercent;
    return tipCalc + total;
}

let totalAmount = getTip(100, .2);
console.log(totalAmount);

let getTipTwo = function(total, tipPercent = .2) {
    return total * tipPercent;
}

let totalCost = 84
let tip = getTipTwo( totalCost )

let totalToPay = totalCost + tip;

console.log(`The total of your meal has come to ${totalCost}, the amount you should pay on top of this as a tip is ${tip}, bringing your total to ${totalToPay} `);

// heres another way to write this

let getTipThree = function (total, tipPercent =.2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let  tippo = getTipThree(60);
console.log(tippo);

// you can run the calculations inside a template string.
let getTipFour = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
}

let tippop = getTipFour(75);
console.log(tippop);