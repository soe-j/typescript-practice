(() => {
  function greeter(person: string) {
    return "Hello, " + person
  }

  const user = "taro"
  console.log(greeter(user))

  // const users = ["taro", "jiro", "sabu"]
  // console.log(greeter(users))
  // => error TS2345: Argument of type 'string[]' is not assignable to parameter of type 'string'.
})();

(() => {
  interface Person {
    firstName: string;
    lastName: string;
  }

  let greeter = (person: Person) => {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }

  let user = { firstName: "taro", lastName: "suzuki" };
  console.log(greeter(user));

  // let userWithoutLastName = { firstName: "jiro" };
  // console.log(greeter(userWithoutLastName));
  // => error TS2345: Argument of type '{ firstName: string; }' is not assignable to parameter of type 'Person'.
  //    Property 'lastName' is missing in type '{ firstName: string; }' but required in type 'Person'.

  // let userWithWrongFirstName = { firstName: 5, lastName: "suzuki" };
  // console.log(greeter(userWithWrongFirstName));
  // => error TS2345: Argument of type '{ firstName: number; lastName: string; }' is not assignable to parameter of type 'Person'.
  //    Types of property 'firstName' are incompatible.
  //    Type 'number' is not assignable to type 'string'.
})();
