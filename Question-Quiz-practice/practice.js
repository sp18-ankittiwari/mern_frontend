// ================== object ========================

// ### JavaScript Object Mastery Quiz (50 Questions)

// #### ⬤ Basics & Syntax (Q1–10)

// 1. **What is the type of an object created via `{}`?**
//    a) "null"
//    b) **"object"**
//    c) "array"
//    d) "function"

// 2. **Which of the following creates an empty object?**
//    a) `let obj = {};`
//    b) `let obj = new Object();`
//    c) `let obj = Object.create(null);`
//    d) **All of the above**

// 3. **Which of the following is NOT a valid way to access property `name`?**
//    a) `obj.name`
//    b) `obj["name"]`
//    c) **`obj(name)`**
//    d) `Reflect.get(obj, "name")`

// 4. **What is the default prototype of an object created with `{}`?**
//    a) null
//    b) **Object.prototype**
//    c) Array.prototype
//    d) Function.prototype

// 5. **True / False:** All objects in JavaScript inherit from `Object.prototype`.
//    ✓ **True**

// 6. **Which operator checks if a property exists in an object (including prototype)?**
//    a) **`in`**
//    b) `hasOwnProperty()`
//    c) `instanceof`
//    d) `typeof`

// 7. **What does `Object.keys(obj)` return?**
//    a) All properties including non-enumerable
//    b) Only symbol properties
//    c) **Only enumerable string-keyed properties**
//    d) All own and inherited keys

// 8. **What does `Object.entries(obj)` return?**
//    a) Array of values
//    b) Array of keys
//    c) **Array of `[key, value]` pairs**
//    d) An object

// 9. **What is the result of:**
// const obj = { a: 1, b: 2 };
// console.log("a" in obj);

// a) **true**
// b) false
// c) Error
// d) undefined

// 10. **How to check if a key is directly defined on the object (not inherited)?**
//     a) `key in obj`
//     b) `obj.hasOwnProperty(key)`
//     c) `Object.hasOwn(obj, key)`
//     d) **Both b & c**

// ---

// #### ⬤ Nested, Spread & Mutation (Q11–20)

// 11. **What will be the output?** (Important)

// ```js
// const user1 = { name: "A", address: { city: "Delhi" } };
// const user2 = { ...user1 };
// user2.address.city = "Mumbai";
// console.log(user1.address.city);
// ```

// a) Delhi
// b) **Mumbai**
// c) Error
// d) undefined

// 12. **Which method creates a deep copy of a JSON-safe object?**
//     a) `Object.assign()`
//     b) Spread `{...obj}`
//     c) **`JSON.parse(JSON.stringify(obj))`**
//     d) `Array.from(obj)`

// 13. **True / False:** Spread operator does not perform a deep copy.
//     ✓ **True**

// 14. **What will happen here?** (Important)

// ```js
// const obj = { x: 1 };
// Object.freeze(obj);
// obj.x = 100;
// console.log(obj.x);
// ```

// a) **1**
// b) 100
// c) Error
// d) undefined

// 15. **Which one creates an object with no prototype?**
//     a) `Object.create({})`
//     b) **`Object.create(null)`**
//     c) `{}`
//     d) `new Object(null)`

// 16. **Which of the following throws an error in strict mode?**

// ```js
// const obj = {};
// Object.defineProperty(obj, 'a', { value: 10, writable: false });
// obj.a = 20;
// ```

// a) Non-strict only
// b) **Strict mode only**
// c) Never
// d) Always

// 17. **What happens if you use `delete` on a non-configurable property?**
//     a) It gets deleted
//     b) It gets set to `undefined`
//     c) **It silently fails (non-strict)**
//     d) **Throws error in strict mode**

// 18. **What is the output?**

// ```js
// const a = { num: 5 };
// const b = a;
// b.num = 10;
// console.log(a.num);
// ```

// a) 5
// b) **10**
// c) Error
// d) undefined

// 19. **Which tool freezes nested properties recursively?**
//     a) `Object.freeze()`
//     b) **Custom recursive function**
//     c) `Object.seal()`
//     d) `Reflect.freeze()`

// 20. **What is returned by `Object.values({ a: 1, b: 2 })`?**
//     a) **\[1, 2]**
//     b) \['a', 'b']
//     c) \[\['a',1], \['b',2]]
//     d) undefined

// ---

// #### ⬤ Descriptors, Symbols, Getters/Setters (Q21–30)

// 21. **Which method defines fine-grained control over properties?**
//     ✓ **`Object.defineProperty()`**

// 22. **Which descriptor makes a property read-only?**
//     ✓ **`writable: false`**

// 23. **True / False:** A getter is invoked like a function but accessed like a property.
//     ✓ **True**

// 24. **What is the output?**

// ```js
// const obj = {
//   get val() { return 42; },
//   set val(x) { console.log("setter", x); }
// };
// console.log(obj.val);
// obj.val = 100;
// ```

// ✓ **42 then "setter 100"**

// 25. **Which returns all property names including non-enumerable ones?**
//     ✓ **`Object.getOwnPropertyNames()`**

// 26. **What are symbols used for in objects?**
//     ✓ **Unique private keys / metadata**

// 27. **Which returns all keys including symbols?**
//     ✓ **`Reflect.ownKeys()`**

// 28. **What is the output?**

// ```js
// const sym = Symbol("id");
// const obj = { [sym]: 123 };
// console.log(Object.keys(obj));
// ```

// ✓ **\[]** (symbol keys are not enumerable by default)

// 29. **Which can’t be stringified by `JSON.stringify()`?**
//     ✓ **All of the above** (`undefined`, functions, symbols)

// 30. **Can you make a computed key inside an object literal?**
//     ✓ **Yes, using `[]` brackets**

// ---

// #### ⬤ Advanced & Real-World (Q31–50)

// 31. **What does `Object.preventExtensions(obj)` do?**
//     a) **Prevents adding new properties**
//     b) Prevents modifying existing ones
//     c) Prevents deleting properties
//     d) Makes properties read-only

// 32. **What is the output?**

// ```js
// const obj = { a: 1 };
// Object.preventExtensions(obj);
// obj.b = 2;
// console.log(obj.b);
// ```

// a) 2
// b) **undefined**
// c) Error
// d) null

// 33. **What does `Object.seal(obj)` do?**
//     a) **Prevents adding/removing properties**
//     b) Makes properties read-only
//     c) Makes properties enumerable
//     d) All of the above

// 34. **What is output?**

// ```js
// let obj = { name: "Ankit" };
// Object.seal(obj);
// delete obj.name;
// console.log(obj.name);
// ```

// a) undefined
// b) **"Ankit"**
// c) null
// d) Error

// 35. **Which method converts a Map to an Object?**
//     a) `Object.assign(map)`
//     b) `Object.fromMap()`
//     c) **`Object.fromEntries(map)`**
//     d) `Map.toObject()`

// 36. **What does this return?**

// ```js
// Object.getPrototypeOf({})
// ```

// a) null
// b) **`Object.prototype`**
// c) `Function.prototype`
// d) {}

// 37. **What is output?**

// ```js
// const obj = {};
// console.log(obj.__proto__ === Object.prototype);
// ```

// a) **true**
// b) false
// c) undefined
// d) Error

// 38. **Which of the following modifies the prototype chain of an object?**
//     a) **`Object.setPrototypeOf()`**
//     b) `Object.assign()`
//     c) `Object.defineProperty()`
//     d) `Object.freeze()`

// 39. **What is the output?**

// ```js
// const parent = { greet: () => "Hi" };
// const child = Object.create(parent);
// console.log(child.greet());
// ```

// a) Error
// b) **Hi**
// c) undefined
// d) null

// 40. **True / False:** Prototype chain can be modified at runtime.
//     ✓ **True**

// 41. **What is the output?**

// ```js
// const obj = { a: { b: 5 } };
// console.log(obj?.a?.b);
// ```

// a) **5**
// b) undefined
// c) Error
// d) null

// 42. **What is the output?**

// ```js
// const obj = { a: null };
// console.log(obj?.a?.b);
// ```

// a) Error
// b) null
// c) **undefined**
// d) TypeError

// 43. **What is the difference between `in` and `hasOwnProperty()`?**
//     a) **`in` includes prototype; `hasOwnProperty()` doesn’t**
//     b) Both behave the same
//     c) `in` returns value, `hasOwnProperty()` returns boolean
//     d) `hasOwnProperty()` is deprecated

// 44. **What is the output?**

// ```js
// const obj = {};
// obj[{}] = "value";
// console.log(Object.keys(obj));
// ```

// a) **\["\[object Object]"]**
// b) \[object Object]
// c) \[]
// d) Error

// 45. **Which of the following is true about `structuredClone()`?**
//     a) It creates a deep copy
//     b) Supports circular references
//     c) Better than JSON stringify/parse
//     d) **All of the above**

// 46. **What is the output?**

// ```js
// const a = {};
// const b = {};
// a[b] = "first";
// a["[object Object]"] = "second";
// console.log(a[b]);
// ```

// a) first
// b) **second**
// c) undefined
// d) Error

// 47. **Which of these are not copied with `Object.assign()`?**
//     a) Inherited properties
//     b) Symbols
//     c) Non-enumerables
//     d) **All of the above**

// 48. **How to loop over both keys and values?**
//     a) `for...in`
//     b) **`Object.entries(obj).forEach()`**
//     c) `Object.values()`
//     d) `Object.keys()`

// 49. **What is output?**

// ```js
// const obj = { name: "Ankit" };
// console.log(JSON.stringify(obj, null, 2));
// ```

// a) Minified string
// b) **Pretty-printed JSON string**
// c) Error
// d) undefined

// 50. **What is output?**

// ```js
// let obj = { x: 1 };
// let frozen = Object.freeze(obj);
// frozen.x = 100;
// console.log(obj.x);
// ```

// a) 100
// b) **1**
// c) Error
// d) undefined


// ======================================Function Quiz Practic ========================