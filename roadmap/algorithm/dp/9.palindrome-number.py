#
# @lc app=leetcode id=9 lang=python
#
# [9] Palindrome Number
#
import math
# @lc code=start
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if (x < 0):
            return False
        if (x < 10):
            return True
        sl = len(s)
        odd = sl % 2 is not 0
        left = sl // 2 - 1
        right = sl // 2 + 1 if odd else sl // 2 + 1
        print(left, right)

        while(left >= 0 and right < sl):
            if (s[left] is not s[right]):
                return False
            else:
                left-=1
                right+=1
        return True
# @lc code=end

