int max(int* nums, int start , int end)
{
    int max_ = nums[start];
    for (int i = start; i < end; i++)
    {
        if (nums[i] > max_)
            max_ = nums[i];
    }
    return (max_);
}

int min(int* nums, int start , int end)
{
    int min_ = nums[start];
    for (int i = start; i < end; i++)
    {
        if (nums[i] < min_)
            min_ = nums[i];
    }
    return (min_);
}
int firstStableIndex(int* nums, int numsSize, int k) {
    for (int i = 0 ; i < numsSize; i++)
    {
        int max_ = max(nums, 0, i+1);
        int min_ = min(nums, i, numsSize);
        if (max_ - min_ <= k)
            return (i);
    }
    return(-1);
}
