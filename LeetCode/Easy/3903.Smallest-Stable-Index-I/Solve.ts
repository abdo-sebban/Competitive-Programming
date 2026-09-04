/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function max_(nums : number[] , start : number, end : number) : number
{
    let max_ = nums[start];
    for (let i = start; i < end; i++)
    {
        if (nums[i] > max_)
            max_ = nums[i];
    }
    return (max_);
}

function min_(nums : number[], start : number, end : number) : number
{
    let min_ = nums[start];
    for (let i = start; i < end; i++)
    {
        if (nums[i] < min_)
            min_ = nums[i];
    }
    return (min_);
}

firstStableIndex = function(nums, k)    
{
    for (let i = 0 ; i < nums.length ; i++)
    {
        let max__ = max_(nums, 0, i+1);
        let min__ = min_(nums, i, nums.length);
        if (max__ - min__ <= k)
            return (i);
    }
    return(-1);
    
};

