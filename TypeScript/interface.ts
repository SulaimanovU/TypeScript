// Examle of interface
interface Vechile { 
  name: string;
  year: Date; // complex objects 
  broken: boolean;
  summary(): string; // functions
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const mazda = {
  name: 'mazda 12',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const printVechile = (vechile: Vechile): void => {
  console.log(`Name: ${vechile.name}`);
  console.log(`Year: ${vechile.year}`);
  console.log(`Broken: ${vechile.broken}`);
  console.log(vechile.summary());
}

printVechile(oldCivic);
printVechile(mazda);