let temp = 59;



if( temp >= 60 && temp <= 90) {
    console.log('is is pretty nice out')
} 
else if ( temp <= 0 || temp >= 120) {
    console.log('do not go outside');
}
else {
    console.log('nooooooooooo');
}


let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if( isGuestOneVegan && isGuestTwoVegan) {
    console.log('only offer up vegan dishes');
} else if(isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options') 
} else {
 console.log('offer them up anything on the menu');
}
