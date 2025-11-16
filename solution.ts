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
