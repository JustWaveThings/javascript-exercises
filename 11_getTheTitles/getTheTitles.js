// Your job is to write a function that takes the array and returns an array of titles:

// ```javascript
// getTheTitles(books) // ['Book','Book2']
// ``
// ## Hints
// - You should use a built-in javascript method to do most of the work for you!


const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];


const getTheTitles = (array) => {
    const titles = [];
    array.forEach((element) => {
        const { title } = element;
        titles.push(title);
    });
    return titles;
};

// console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
