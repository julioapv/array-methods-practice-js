// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

function sorted(arr) {
    const newArr = [...arr]
    return newArr.sort((a, b) => a.length - b.length)
};

console.log(sorted(arr), arr);
