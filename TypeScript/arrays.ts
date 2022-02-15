// Arrays inference
let colors = ['red', 'blue', 'white'];

// Arrays annotation
let colors2: string[];
colors = ['red', 'blue', 'white'];

// Arrays with complex objects
let dates = [new Date(), new Date(), new Date()];

// Flexible array types inference
let importantDates1 = [new Date(), '28:11:2021'];
importantDates1.push(new Date());
importantDates1.push('21:12:2021');

// // Flexible array types annotation
let importantDates2: (Date | string)[];
importantDates2.push(new Date());
importantDates2.push('21:12:2021');

// Why types needed in arrays
// 1) Helps with inference when extracting value
const color1 = colors[0];
const color2 = colors.pop();

// 2) Prevent incompatible values
// colors.push(true) <- here we get error, colors array has string type

// 3) help with 'map' 'forEach' 'reduce' etc functions
colors.map((color: string): string => {
  return color.toUpperCase(); // here we can use string methods
})