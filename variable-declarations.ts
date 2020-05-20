// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log('var', i);
//   }, 100 * i)
// }

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log('let', i);
//   }, 100 * i)
// }

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(n => {
//   setTimeout(() => {
//     console.log('forEach', n);
//   }, 100 * n)
// })


// console.log(Array(10).fill(0))
// Error?

type C = { a: string; b?: number };
function f1({ a, b }: C): void {
  console.log('f1(): { a:', a, ', b:', b, '}');
}
f1({ a: "ok" }); // => { a: ok , b: undefined }
// f1(); // => An argument matching this binding pattern was not provided.
// f1({}); // => Property 'a' is missing in type '{}' but required in type 'C'.

function f2({ a, b = 0 } = { a: "" }): void {
  console.log('f2(): { a:', a, ', b:', b, '}');
}
f2({ a: "ok" }); // => { a: ok , b: 0 }
f2(); // => { a: "" , b: 0 }
// f2({}); // => Property 'a' is missing in type '{}' but required in type '{ a: string; b?: number; }'.
