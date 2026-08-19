# 2704. To Be Or Not To Be

## Problem

Write a function `expect` that helps developers test their code.

The function accepts any value `val` and returns an object with two functions:

* `toBe(val)` returns `true` if the two values are strictly equal using `===`. Otherwise, it throws an error `"Not Equal"`.
* `notToBe(val)` returns `true` if the two values are not strictly equal using `!==`. Otherwise, it throws an error `"Equal"`.

## Example 1

```text
Input: func = () => expect(5).toBe(5)

Output: {"value": true}
```

Explanation:

```javascript
expect(5).toBe(5); // true
```

Since `5 === 5`, the expression returns `true`.

## Example 2

```text
Input: func = () => expect(5).toBe(null)

Output: {"error": "Not Equal"}
```

Since `5 !== null`, the expression throws the error `"Not Equal"`.

## Example 3

```text
Input: func = () => expect(5).notToBe(null)

Output: {"value": true}
```

Since `5 !== null`, the expression returns `true`.
