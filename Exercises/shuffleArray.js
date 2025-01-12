// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

let arr = [1, 2, 3];

function shuffle(arr) {

    return arr.sort((a, b) => 0.5 - Math.random())
};

console.log(shuffle(arr));


