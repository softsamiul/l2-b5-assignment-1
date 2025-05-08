#### 2. What is the use of the keyof keyword in TypeScript? Provide an example.

<strong>Ans:</strong> In TypeScript keyof keyword is used to extract the keys of a object and create a union of string literal types. It useful when we refer keys of an object in a type-safe way.

Example:

```ts
type User = {
  id: numer;
  name: string;
  isAdmin: boolean;
};
// creating union type from User using keyof
type UserProperties = keyof User;
// UserProperties = "id" | "name" | "isAdmin"

// keyof using with generic function
function getValue<T, k extends keyof T>(obj: T, key: K): t[K] {
  return obj[key];
}

const user = {
  id: 101,
  name: "Sam",
  isAdmin: false,
};
const userName = getValue(user, "name");
```

#### How does TypeScript help in improving code quality and project maintainability?

<strong>Ans:</strong> TypeScript improves code quality and project maintainability in several important way by adding <strong>static typing</strong>, <strong>scalability for large codebases</strong>, <strong>safe refactoring</strong>, <strong>early bug detection</strong> and many more.

<strong>Static typing and early bug detectinon:</strong> It prevents many runtine errors by catching the type mistakes at compile time.
Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
add(1, "2"); // Will give error type string not assignable to type number
```

<strong>Scalability for large codebases:</strong> Helps to manage large and complex codebase easily by giving strict typing and predictable interfaces.

<strong>Safe refactoring:</strong> Refactoring code in any place becomes very easy and safer like function parameter, renaming properties or updating Typescript flags broken uses across the codebase in compile time.

<strong>Self documenting code:</strong> Type definitations serve as built-in documentation and helping developers understand the code quickly. Below example explaing the code itself.
Example:

```ts
Type Product = {
    id: number;
    name: string;
    price: number
}
```

Along with above options typescript help us in more ways like better IDE support and autocompletion which helps developers to write code more faster and efficitively, integration with modern tooling like ESLint, Prettier etc to write clean consistent and bug free code.
