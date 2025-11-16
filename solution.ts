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


