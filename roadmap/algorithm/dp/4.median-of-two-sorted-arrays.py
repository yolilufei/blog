#
# @lc app=leetcode id=4 lang=python
#
# [4] Median of Two Sorted Arrays
#

# @lc code=start
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        nums = nums1 + nums2
        nums.sort()
        len = len(nums)
        if len % 2 == 0:
            return (nums[len/2 + 1] + nums[len/2 - 1]) / 2
        else:
            return nums[math.ceil(len/2)]
# @lc code=end

