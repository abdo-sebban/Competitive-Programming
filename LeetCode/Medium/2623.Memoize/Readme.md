# 2623. Memoize

## Problem

Given a function `fn`, return a memoized version of that function.

A memoized function stores the result of previous function calls. If the function is called again with the same arguments, it should return the cached result instead of calling `fn` again.

You can assume that `fn` is one of the following functions:

* `sum(a, b)` returns `a + b`.
* `fib(n)` returns `1` if `n <= 1`, otherwise `fib(n - 1) + fib(n - 2)`.
* `factorial(n)` returns `1` if `n <= 1`, otherwise `factorial(n - 1) * n`.

The order of arguments matters. For example, `(2, 3)` and `(3, 2)` should be treated as different inputs.

## Example 1

```text id="w91txm"
Input:
fnName = "sum"
actions = ["call", "call", "getCallCount", "call", "getCallCount"]
values = [[2, 2], [2, 2], [], [1, 2], []]

Output: [4, 4, 1, 3, 2]
```

Explanation:

```javascript id="f3lbdx"
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

memoizedSum(2, 2); // 4
memoizedSum(2, 2); // 4, returned from cache
memoizedSum(1, 2); // 3
```

The original `sum` function is only called once for each unique set of arguments.

## Example 2

```text id="dl4yuj"
Input:
fnName = "factorial"
actions = ["call", "call", "call", "getCallCount", "call", "getCallCount"]
values = [[2], [3], [2], [], [3], []]

Output: [2, 6, 2, 2, 6, 2]
```

Previously calculated values are returned from the cache.

## Example 3

```text id="p1lv8x"
Input:
fnName = "fib"
actions = ["call", "getCallCount"]
values = [[5], []]

Output: [8, 1]
```

The first call calculates `fib(5)` and stores the result. Repeated calls with the same argument return the cached value.

## Constraints

* `0 <= a, b <= 10^5`
* `1 <= n <= 10`
* `1 <= actions.length <= 10^5`
* `actions.length === values.length`
* `actions[i]` is either `"call"` or `"getCallCount"`
* `fnName` is one of `"sum"`, `"factorial"`, or `"fib"`
