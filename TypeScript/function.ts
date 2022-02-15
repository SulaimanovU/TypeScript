// function type annotations 1 - example
const add: (a: number, b: number) => number = (a, b) => {
  return a + b;
}

const addResult: number = add(4, 7);

// function type annotations 1 - example
const multiply = (a: number, b: number): number => {
  return a * b;
}

const mulResult: number = multiply(4, 7);

// function type annotations with 'void' or 'never'
const logger = (msg: string): void => {
  console.log(msg);
}

const throwErr = (msg: string): never => {
  throw new Error(msg);
}

// function parameter as user defined literal object 1 - example
const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log('today Date', forecast.date);
  console.log('today Weather', forecast.weather);
}

// function parameter as user defined literal object 2 - example
const todayWeather2 = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather2 = (forecast: typeof todayWeather2): void => {
  console.log('today Date', forecast.date);
  console.log('today Weather', forecast.weather);
}

// function parameter as user defined literal object with destructurization
const todayWeather3 = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather3 = ({date, weather}: {date: Date, weather: string}): void => {
  console.log('today Date', date);
  console.log('today Weather', weather);
}
