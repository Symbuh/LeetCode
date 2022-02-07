/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = l1;
    
    let inner = (l1, l2, remainder) => {
        let total = l1.val + l2.val + remainder;
        
        if (total >= 10) {
            remainder = Math.floor((total / 10) % 10); 
            total = Math.floor((total / 1) % 10);
        } else {
            remainder = 0;
        }
        
        l1.val = total;
        
        if (l1.next === null && l2.next !== null || l1.next === null && remainder !== 0) {
            l1.next = new ListNode(0, null);
        }
        
        if (l2.next === null && l1.next !== null || l1.next === null && remainder !== 0) {
            l2.next = new ListNode(0, null);
        }
        
        if (l1.next === null && l2.next === null) {
            return head;
        }
        
        inner(l1.next, l2.next, remainder);
        
    };
    inner(l1, l2, 0);
    return head;
    
};