//*  Problem 01: Create a function formatValue that takes a parameter which can be a number, string, or boolean.

const formatValue = (input: number | string | boolean) => {
  if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "boolean") {
    return !input;
  }
};

formatValue("hello world");
formatValue(5);
formatValue(true);

//* Problem 02: Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

const getLength = (value: string | any[]): number => {
  if (value === "string" || Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

getLength("Arman Hossain");
getLength([1, 2, 9, 7, 6, 3, 8]);

//* Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age};`);
  }
}

const person1 = new Person("Arman Hossain", 24);

person1.getDetails();
