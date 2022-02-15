// object literal annotation 
let poin: {x: number, y: number} = {
  x: 10,
  y: 25
}

// object literal inference 
let poin2 = {
  x: 10,
  y: 25
}


// object annotation 
let poin3: {x: number, y: string};
poin3 = {
  x: 10,
  y: '25'
}

// optional properties
let point4: {x: number, y?: number};
point4 = {
  x: 12
  // y did not passed
}


// object destructurization
const profile = {
  name: 'Jack',
  age: 25,
  coordinates: {
    lat: 1,
    lng: 20
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile;
const { coordinates: { lat, lng } }: {coordinates: { lat: number, lng: number }} = profile;
