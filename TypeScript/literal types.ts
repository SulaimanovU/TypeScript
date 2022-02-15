let x: 'hello' = 'hello';
x = 'hello'; // OK
// x = 'howdy'; // Here we get error


function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left"); // OK
// printText("G'day, mate", "centre"); // Here we get error

// Numeric literal types
function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}


// Combine these with non-literal types

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 }); // OK
configure("auto"); // OK
// configure("automatic"); // Here we get error