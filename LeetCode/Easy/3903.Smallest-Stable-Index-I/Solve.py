class Solution:
    def firstStableIndex(self, nums: list[int], k: int) -> int:
        for i in range(len(nums)):
            max_ = max(nums[j] for j in range(0, i+1))
            min_ = min(nums[j] for j in range(i, len(nums)))
            if (max_ - min_ <= k):
                return (i)
        return(-1)