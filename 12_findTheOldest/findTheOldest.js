// # Exercise 12 - Find the Oldest

// Given an array of objects representing people with a birth and death year, return the oldest person.

// ## Hints
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// - this can be done with a couple of chained array methods, or by using `reduce`.
// - One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// I need to iterate through the array, and for each element, see if the object contains key 'yearOfDeath". If it doesn't, I need to add a key value pair. then run the existing function code blocks on the amended array elements to return the oldest exactly like the first test.  I expect this code will also pass 3rd test without modification as the array will be fixed before evaluating who's the oldest.

// people.forEach(element => (element['yearOfDeath'] === undefined) ? element. yearOfDeath = 2022 : false  );

// people.forEach(element => console.log(element));



// this works
function findTheOldest(arr) {
    arr.forEach(element => (element['yearOfDeath'] === undefined) ? element. yearOfDeath = 2022 : false  );
    arr.sort((a, b) => {
        const lastP = a.yearOfDeath - a.yearOfBirth;
        const nextP = b.yearOfDeath - b.yearOfBirth;
        return lastP > nextP ? -1 : 1;
    })
    return arr[0];
};
// console.log(findTheOldest(people));










module.exports = findTheOldest;
