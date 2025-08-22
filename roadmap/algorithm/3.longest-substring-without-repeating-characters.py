#
# @lc app=leetcode id=3 lang=python
#
# [3] Longest Substring Without Repeating Characters
#

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# @lc code=start
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        # solve

        if(s is None):
            return 0
        if(len(s) == 1):
            return 1
        # 双指针
        # max_len = 0
        # s_list = list(s)
        # for f,l in enumerate(s_list):
        #     for s_s,l_s in enumerate(s_list):
        #         if (s_s <= f):
        #             continue
        #         if(l == l_s):
        #             lens = s_s - f
        #             # print(f'{s_s}:{l_s}, {f}:{l}')
        #             max_len = max_len if max_len > lens else lens
        #             # print(f'lens {lens}, max_len {max_len}')
        #             break
        #         # cur_len=s_s-f
        #         # max_len=cur_len if cur_len > max_len else max_len
        #         if (s_s == len(s) - 1):
        #             cur_len = s_s - f + 1
        #             max_len = cur_len if cur_len > max_len else max_len
        # return max_len if max_len > 0 else len(s)   
        max_len = 0
        s_list = list(s)
        another_list = list()
        for item in s_list:
            another_lisy
    
solution = Solution()
ret = solution.lengthOfLongestSubstring('abcabcbb')
print(f'长度 {ret}')
# @lc code=end

