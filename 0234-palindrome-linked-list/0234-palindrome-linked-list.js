/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const reverseLinkedList = (head) => {
    let prev = null;
    
    while (head !== null) {
        let tempHeadNext = head.next;
        head.next = prev;
        prev = head;
        head = tempHeadNext;
    }
    
    return prev;
};

var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    let startPointer = head;
    let length = 0;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        length++;
    }
    
    let mid = reverseLinkedList(slow);
    
    while (length) {
        length--;
        if (mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }
    
    return true;
};