/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function max(nums, start, end)
{
    let max_ = nums[start];
    for (let i = start; i < end; i++)
    {
        if (nums[i] > max_)
            max_ = nums[i];
    }
    return (max_);
}

function min(nums, start , end)
{
    let min_ = nums[start];
    for (let i = start; i < end; i++)
    {
        if (nums[i] < min_)
            min_ = nums[i];
    }
    return (min_);
}

var firstStableIndex = function(nums, k)
{
    for (let i = 0 ; i < nums.length ; i++)
    {
        let max_ = max(nums, 0, i+1);
        let min_ = min(nums, i, nums.length);
        if (max_ - min_ <= k)
            return (i);
    }
    return(-1);
    
};

