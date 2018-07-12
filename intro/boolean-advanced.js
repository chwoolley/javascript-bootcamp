let temp = 44;



if (temp <= 32) {
    console.log('it is freezing outside');
} else if (temp >= 110) {
    console.log('fuck off it is friggen hot');
} else {
    console.log('it is actually kind of balmy');
}





let isAccountLocked = false;
let userRole = 'admin';

if ( isAccountLocked) {
    console.log('account is locked');
} else if(userRole === 'admin') {
    console.log('welcome admin');
}
else {
    console.log('welcome');
}