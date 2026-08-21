# 2629. Function Composition

## Problem

Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function that represents the function composition of the array.

The function composition of:

```text
[f(x), g(x), h(x)]
```

is:

```text
fn(x) = f(g(h(x)))
```

The functions are evaluated from right to left.

If the array of functions is empty, the returned function should be the identity function:

```text
f(x) = x
```

## Example 1

```text
Input:
functions = [x => x + 1, x => x * x, x => 2 * x]
x = 4

Output: 65
```

Explanation:

```text
x = 4
2 * 4 = 8
8 * 8 = 64
64 + 1 = 65
```

## Example 2

```text
Input:
functions = [x => 10 * x, x => 10 * x, x => 10 * x]
x = 1

Output: 1000
```

Explanation:

```text
10 * 1 = 10
10 * 10 = 100
10 * 100 = 1000
```

## Example 3

```text
Input:
functions = []
x = 42

Output: 42
```

The composition of an empty array of functions is the identity function, so the result remains `42`.

## Constraints

* `-1000 <= x <= 1000`
* `0 <= functions.length <= 1000`
* All functions accept and return a single integer
