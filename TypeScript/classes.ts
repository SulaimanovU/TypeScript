class VechileC {
  type: string = 'Machine';
  name: string;
  manufacturer: string;
  date: Date;

  constructor(name: string) {
    this.name = name;
  }

  drive(distance: number): void {
    console.log(`drive ${distance} km`)
  }

  stop(): void {
    console.log('Machine stoped!')
  }

  sayName(): void {
    console.log(`machine name is ${this.name}`)
  }
}


const mazda1 = new VechileC('mazda 1');
