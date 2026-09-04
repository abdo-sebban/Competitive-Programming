# 3903. Smallest Stable Index I

## Problem

You are given an integer array `nums` of length `n` and an integer `k`.

For each index `i`, define its instability score as:

```text
max(nums[0..i]) - min(nums[i..n - 1])
```

Where:

* `max(nums[0..i])` is the largest value from index `0` to index `i`.
* `min(nums[i..n - 1])` is the smallest value from index `i` to index `n - 1`.

An index `i` is called stable if its instability score is less than or equal to `k`.

Return the smallest stable index. If no stable index exists, return `-1`.

## Example 1

```text
Input:
nums = [5, 0, 1, 4]
k = 3

Output: 3
```

Explanation:

```text
Index 0: 5 - 0 = 5
Index 1: 5 - 0 = 5
Index 2: 5 - 1 = 4
Index 3: 5 - 4 = 1
```

Index `3` is the first index where the instability score is less than or equal to `3`.

## Example 2

```text
Input:
nums = [3, 2, 1]
k = 1

Output: -1
```

Explanation:

The instability score is greater than `1` for every index, so there is no stable index.

## Example 3

```text
Input:
nums = [0]
k = 0

Output: 0
```

Explanation:

At index `0`:

```text
0 - 0 = 0
```

Since `0 <= k`, index `0` is stable.

## Constraints

* `1 <= nums.length <= 100`
* `0 <= nums[i] <= 10^9`
* `0 <= k <= 10^9`
