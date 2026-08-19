# 2667. Create Hello World Function

## Problem

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

### Example 1

```javascript
const f = createHelloWorld();

f(); // "Hello World"
```

### Example 2

```javascript
const f = createHelloWorld();

f({}, null, 42); // "Hello World"
```

Any arguments passed to the returned function should be ignored, and it should always return `"Hello World"`.

## Constraints

* `0 <= args.length <= 10`
