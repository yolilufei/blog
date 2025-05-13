/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): [number, number] | [] {
    if (!Number.isInteger(target) || nums.length < 2) {
        return [];
    }
    const map = new Map<number, number>();
    const subNums = nums.filter((n, index) => {
        if (n < target) {
            map.set(n, index);
            return true;
        }
        return false;
    });

    if (subNums.length < 2) {
        return [];
    }
    
    for (let index = 0; index < subNums.length; index++) {
        const another = target - subNums[index];
        if (map.has(another)) {
            return [index, map.get(another) as number];
        }
    }
    return [];
};

console.log(twoSum([2,7,11,15], 8));
// @lc code=end

