# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import math
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        start = head
        headLen = 0
        while (start != None):
            headLen += 1
            start = start.next
        
        mid = math.floor(headLen / 2)
        j = 0
        while (head != None):
            if (j == mid):
                return head
            j += 1
            head = head.next