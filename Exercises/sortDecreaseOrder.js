// Literally what the title says lol

let arr = [5, 2, 1, -10, 8];

function sortDecreaseOrder(arr) {
    return arr.sort((a, b) => b - a)
};

console.log(sortDecreaseOrder(arr));
