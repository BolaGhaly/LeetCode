/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseLinkedList = (head) => {
    if (head === null) return null; // empty linked list
    if (head.next === null) return head; // 1 node/item in linked list, return it
    
    let curr = head;
    let next = null;
    let prev = null;
    
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}

var reverseList = function(head) {
    return reverseLinkedList(head);
};