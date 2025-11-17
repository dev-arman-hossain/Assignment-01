//*  Problem 01

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

//* Problem 02

const getLength = (value: string | any[]): number => {
  if (value === "string" || Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

getLength("Arman Hossain");
getLength([1, 2, 9, 7, 6, 3, 8]);

//* Problem 03

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

//* Problem 04

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

filterbyrating(items);

//* Problem 05

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

filterActiveUsers(users);

//* Problem 06

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

//* Problem 07

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
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

getUniqueValues([1, 2, 3], [3, 4, 5]);

//* Problem 08

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]) => {
  const total = products.reduce((sum, product) => {
    const productTotal = product.price * product.quantity;
    const discountAmount = product.discount
      ? (productTotal * product.discount) / 100
      : 0;
    const totalPrice = productTotal - discountAmount;

    console.log(sum);
    return sum + totalPrice;
  }, 0);

  return total;
};

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

calculateTotalPrice(products);
