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
// const findTheOldest1 = people.sort((a, b) => {
//   const lastP = a.yearOfDeath - a.yearOfBirth;
//   const nextP = b.yearOfDeath - b.yearOfBirth;
//   return lastP > nextP ? -1 : 1;
// });

function findTheOldest(arr) {
    arr.sort((a, b) => {
        const lastP = a.yearOfDeath - a.yearOfBirth;
        const nextP = b.yearOfDeath - b.yearOfBirth;
        return lastP > nextP ? -1 : 1;
    })
    return arr[0];
};

// console.log(findTheOldest1);
// console.log(findTheOldest1[0]);
console.log(findTheOldest(people));



// Do not edit below this line
// module.exports = findTheOldest;
