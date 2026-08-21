# 2626. Array Reduce Transformation

## Problem

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return the final result obtained by applying `fn` to each element of the array sequentially.

The result is calculated as follows:

```text
val = fn(init, nums[0])
val = fn(val, nums[1])
val = fn(val, nums[2])
...
```

The final value of `val` should be returned.

If the array is empty, return `init`.

Solve the problem without using the built-in `Array.reduce` method.

## Example 1

```text
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

Output: 10
```

Explanation:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

## Example 2

```text
Input:
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100

Output: 130
```

Explanation:

```text
100 + 1² = 101
101 + 2² = 105
105 + 3² = 114
114 + 4² = 130
```

## Example 3

```text
Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25

Output: 25
```

For an empty array, the result is always `init`.

## Constraints

* `0 <= nums.length <= 1000`
* `0 <= nums[i] <= 1000`
* `0 <= init <= 1000`
