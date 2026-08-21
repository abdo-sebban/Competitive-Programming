# 2635. Apply Transform Over Each Element in Array

## Problem

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that:

```text
returnedArray[i] = fn(arr[i], i)
```

Solve the problem without using the built-in `Array.map` method.

## Example 1

```text
Input: arr = [1, 2, 3]
fn = function plusone(n) { return n + 1; }

Output: [2, 3, 4]
```

Explanation:

```javascript
const newArray = map(arr, plusone); // [2, 3, 4]
```

The function increases each value in the array by one.

## Example 2

```text
Input: arr = [1, 2, 3]
fn = function plusI(n, i) { return n + i; }

Output: [1, 3, 5]
```

Explanation:

The function increases each value by its index.

## Example 3

```text
Input: arr = [10, 20, 30]
fn = function constant() { return 42; }

Output: [42, 42, 42]
```

Explanation:

The function always returns `42`.
