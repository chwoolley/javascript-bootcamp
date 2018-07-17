//basc object

let myBook =  {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(typeof(myBook));
console.log(myBook); // all of them

//dot notation
console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.pageCount);

//or in a template string

console.log(`The books title is ${myBook.title}, the author is ${myBook.author} and the number of pages is ${myBook.pageCount}`);
