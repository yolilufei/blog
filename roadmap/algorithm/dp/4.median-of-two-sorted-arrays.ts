/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums: number[] = [...nums1, ...nums2].sort((a, b) => a - b > 0 ? 1 : -1);
  if (nums.length % 2 === 0) {
    const mid = nums.length/2;
    const left = mid - 1;
    console.log((nums[mid] + nums[left]) / 2);
    return (nums[mid] + nums[left]) / 2;
  }
  console.log(nums, nums[8]);
  return nums[Math.floor(nums.length/2)];
};
// @lc code=end

console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]));