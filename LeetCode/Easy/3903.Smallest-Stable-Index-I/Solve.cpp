class Solution {
    public:
        int max(vector<int>& nums, int start , int end)
        {
            int max_ = nums[start];
            for (int i = start; i < end; i++)
            {
                if (nums[i] > max_)
                    max_ = nums[i];
            }
            return (max_);
        }
        int min(vector<int>& nums, int start , int end)
        {
            int min_ = nums[start];
            for (int i = start; i < end; i++)
            {
                if (nums[i] < min_)
                    min_ = nums[i];
            }
            return (min_);
        }

        int firstStableIndex(vector<int>& nums, int k)
        {
            for (int i = 0 ; i < nums.size(); i++)
            {
                int max_ = this->max(nums, 0, i+1);
                int min_ = this->min(nums, i, nums.size());
                if (max_ - min_ <= k)
                    return (i);
            }
            return(-1);
        }
};