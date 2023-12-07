stored = []
function fibonacci(num) {

    if (stored[num]) return stored[num]

    if (num === 0) stored[0] = 0
    if (num === 1) stored[1] = 1

    if (num > 1) stored[num] = fibonacci(num-2) + fibonacci(num-1)

    return stored[num]
}

if (require.main === module) {
// add your own tests in here
console.log("Expecting: 0");
console.log("=>", fibonacci(0));

console.log("");

console.log("Expecting: 1");
console.log("=>", fibonacci(2));

console.log("");

console.log("Expecting: 55");
console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution