function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

let someValue: undefined;

function printResult2(num: number): undefined | void {
  return;
}

// let combineValues: Function;
let combineValues: (a: number, b: number) => number; // Function type

combineValues = add;
// combineValues = printResult; // ERROR due Function Type definition

console.log(combineValues(8, 8));

function addAndHandle(
  n1: number,
  n2: number,
  callback: (num: number) => void
): void {
  const result = n1 + n2;
  callback(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
