# 2634. Filter Elements from Array

## Problem

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The function `fn` can take one or two arguments:

* `arr[i]` - the current element.
* `i` - the index of the current element.

The returned array should only contain elements for which:

```text
fn(arr[i], i)
```

evaluates to a truthy value.

A truthy value is any value for which:

```javascript
Boolean(value) === true
```

Solve the problem without using the built-in `Array.filter` method.

## Example 1

```text
Input: arr = [0, 10, 20, 30]
fn = function greaterThan10(n) { return n > 10; }

Output: [20, 30]
```

Explanation:

```javascript
const newArray = filter(arr, fn); // [20, 30]
```

The function filters out values that are not greater than `10`.

## Example 2

```text
Input: arr = [1, 2, 3]
fn = function firstIndex(n, i) { return i === 0; }

Output: [1]
```

Explanation:

The function can also accept the index of each element. In this case, only the element at index `0` is kept.

## Example 3

```text
Input: arr = [-2, -1, 0, 1, 2]
fn = function plusOne(n) { return n + 1; }

Output: [-2, 0, 1, 2]
```

Explanation:

The value `-1` produces `0`, which is a falsy value, so it is filtered out.

## Constraints

* `0 <= arr.length <= 1000`
* `-10^9 <= arr[i] <= 10^9`
