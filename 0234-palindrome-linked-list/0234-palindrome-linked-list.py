# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def reverseLinkedList(head):
    prev = None
    currNode = head
    nextNode = currNode.next
    while (nextNode != None):
        currNode.next = prev
        prev = currNode
        currNode = nextNode
        nextNode = nextNode.next

    currNode.next = prev
    return currNode

class Solution:        
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        fast = head
        slow = head
        while (fast and fast.next):
            fast = fast.next.next
            slow = slow.next
        
        secondHalfReversed = reverseLinkedList(slow)
        while (head.next != None):
            if (head.val != secondHalfReversed.val):
                return False
            head = head.next
            secondHalfReversed = secondHalfReversed.next 
        return True
