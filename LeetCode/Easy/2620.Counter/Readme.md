# 2620. Counter

## Problem

Given an integer `n`, return a `counter` function.

The `counter` function should initially return `n`. Each subsequent call should return `1` more than the previous value.

The returned values should follow this pattern:

```text
n, n + 1, n + 2, ...
```

## Example 1

```text
Input:
n = 10
["call", "call", "call"]

Output: [10, 11, 12]
```

Explanation:

```text
counter() = 10
counter() = 11
counter() = 12
```

## Example 2

```text
Input:
n = -2
["call", "call", "call", "call", "call"]

Output: [-2, -1, 0, 1, 2]
```

## Constraints

* `-1000 <= n <= 1000`
* `0 <= calls.length <= 1000`
* `calls[i] === "call"`
