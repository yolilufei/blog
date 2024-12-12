# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeKLists(self, lists):
        r=[]
        for item in lists:
            p=self.mergeListItem(item)
            r.extend(p)
        r.sort()
        ret=ListNode()
        cur=ret
        for i in r:
            cur.next=ListNode(i)
            cur=cur.next
        return ret.next
    def mergeListItem(self, l):
        itemList=[]
        while l:
            if l == None:
                break
            else:
                itemList.append(l.val)
                l=l.next
        return itemList


l1=ListNode(1)
l1.next=ListNode(4)
l1.next.next=ListNode(5)
l2=ListNode(1)
l2.next=ListNode(3)
l2.next.next=ListNode(4)
l3=ListNode(2)
l3.next=ListNode(6)
lists=[l1,l2,l3]
s=Solution()
print(s.mergeKLists(lists))