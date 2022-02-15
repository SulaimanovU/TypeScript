// variable type overloading
let userMedia: boolean | number;
userMedia = false;
userMedia = 12;

// array type overloading
let importantDates3: (Date | string)[];
importantDates3.push(new Date());
importantDates3.push('21:12:2021');