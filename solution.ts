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

//* Create a function filterByRating that accepts an array of items, where each item has title & rating:

interface item {
  title: string;
  rating: number;
}

function filterbyrating(itemsArray: item[]): item[] {
  const filteredItems = itemsArray.filter((item) => item.rating >= 4);
  return filteredItems;
}

const items: item[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.8 },
  { title: "Book C", rating: 5 },
  { title: "Book D", rating: 2.1 },
];

console.log(filterbyrating(items));

//* Create a function filterActiveUsers that accepts an array of user objects. Each user object contains id, name, email, and isActive properties. The function should return a new array containing only the users whose isActive property is true.

interface user {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(usersArray: user[]): user[] {
  const filteredUser = usersArray.filter((user) => user.isActive === true);
  return filteredUser;
}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));

//* create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(Books: Book) {
  const availability = Books.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${Books.title}, Author: ${Books.author}, Published: ${Books.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

//* Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  
  function exists(value: string | number, array: (string | number)[]): boolean {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  
  for (let i = 0; i < arr1.length; i++) {
    if (!exists(arr1[i], result)) {
      result[result.length] = arr1[i];
    }
  }

 
  for (let i = 0; i < arr2.length; i++) {
    if (!exists(arr2[i], result)) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}


console.log(getUniqueValues([1, 2, 3], [3, 4, 5]));