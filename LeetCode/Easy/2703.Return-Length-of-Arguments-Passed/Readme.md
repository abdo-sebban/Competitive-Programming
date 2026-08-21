# 2703. Return Length of Arguments Passed

## Problem

Write a function `argumentsLength` that returns the number of arguments passed to it.

## Example 1

```text
Input: args = [5]

Output: 1
```

Explanation:

```javascript
argumentsLength(5); // 1
```

One argument is passed to the function, so it returns `1`.

## Example 2

```text
Input: args = [{}, null, "3"]

Output: 3
```

Explanation:

```javascript
argumentsLength({}, null, "3"); // 3
```

Three arguments are passed to the function, so it returns `3`.

## Constraints

* `args` is a valid JSON array.
* `0 <= args.length <= 100`
