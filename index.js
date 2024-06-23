function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

// Test cases to demonstrate the functionality of each function

// Testing add
console.log(`add(5, 3) = ${add(5, 3)}`);  // Expected output: 8

// Testing subtract
console.log(`subtract(5, 3) = ${subtract(5, 3)}`);  // Expected output: 2

// Testing multiply
console.log(`multiply(5, 3) = ${multiply(5, 3)}`);  // Expected output: 15

// Testing divide
console.log(`divide(5, 2) = ${divide(5, 2)}`);  // Expected output: 2.5

// Testing increment
console.log(`increment(5) = ${increment(5)}`);  // Expected output: 6

// Testing decrement
console.log(`decrement(5) = ${decrement(5)}`);  // Expected output: 4
function makeInt(n) {
    return parseInt(n, 10);
}

// Test cases to demonstrate the functionality of makeInt

// Valid integer strings
console.log(`makeInt('42') = ${makeInt('42')}`);  // Expected output: 42
console.log(`makeInt('100') = ${makeInt('100')}`);  // Expected output: 100

// String with non-numeric characters
console.log(`makeInt('42abc') = ${makeInt('42abc')}`);  // Expected output: 42
console.log(`makeInt('abc42') = ${makeInt('abc42')}`);  // Expected output: NaN

// Decimal numbers
console.log(`makeInt('42.5') = ${makeInt('42.5')}`);  // Expected output: 42

// Non-numeric strings
console.log(`makeInt('hello') = ${makeInt('hello')}`);  // Expected output: NaN

// Edge cases
console.log(`makeInt('') = ${makeInt('')}`);  // Expected output: NaN
console.log(`makeInt(' ') = ${makeInt(' ')}`);  // Expected output: NaN
console.log(`makeInt(null) = ${makeInt(null)}`);  // Expected output: NaN
console.log(`makeInt(undefined) = ${makeInt(undefined)}`);  // Expected output: NaN
function preserveDecimal(n) {
    return parseFloat(n);
}

// Test cases to demonstrate the functionality of preserveDecimal

// Valid decimal strings
console.log(`preserveDecimal('42.5') = ${preserveDecimal('42.5')}`);  // Expected output: 42.5
console.log(`preserveDecimal('100.123') = ${preserveDecimal('100.123')}`);  // Expected output: 100.123

// Valid integer strings
console.log(`preserveDecimal('42') = ${preserveDecimal('42')}`);  // Expected output: 42
console.log(`preserveDecimal('100') = ${preserveDecimal('100')}`);  // Expected output: 100

// String with non-numeric characters
console.log(`preserveDecimal('42.5abc') = ${preserveDecimal('42.5abc')}`);  // Expected output: 42.5
console.log(`preserveDecimal('abc42.5') = ${preserveDecimal('abc42.5')}`);  // Expected output: NaN

// Non-numeric strings
console.log(`preserveDecimal('hello') = ${preserveDecimal('hello')}`);  // Expected output: NaN

// Edge cases
console.log(`preserveDecimal('') = ${preserveDecimal('')}`);  // Expected output: NaN
console.log(`preserveDecimal(' ') = ${preserveDecimal(' ')}`);  // Expected output: NaN
console.log(`preserveDecimal(null) = ${preserveDecimal(null)}`);  // Expected output: NaN
console.log(`preserveDecimal(undefined) = ${preserveDecimal(undefined)}`);  // Expected output: NaN
