//students score
//total possible score
// 15/20 -> you got a C (75%)!
// A 90-100 b 80-89, c 70-79, d 60-69, f 0 - 59

let grade = function(score, totalScore) {
    let percent = (score / totalScore ) * 100;
    let letterGrade = '';

    if ( percent >= 90) {
        letterGrade = 'A';
    } else if ( percent >= 80 ){
        letterGrade = "B";
    } else if (percent >= 70) {
        letterGrade = "C";
    } else if (percent >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = 'F';
    }
 return `You got a ${letterGrade} (${percent}%)!`;
};

let result = grade(1, 20);
console.log(result);