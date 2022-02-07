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
    /*
        I: Two non empty linked lists representing two non-neg ints 
           - Stored in reverse order
           - Each node contains a single didgit 
           
        O: Another linked list stored in reverse order
        C: Int sized output
        
        E: May have to carry the one over and make the list longer
        
        
        For best runtime we want to use one iteration over both of the lists, 
        We would prefer to use the longest list
    */
    let head = l1;
    console.log(`Head ${head.val}`);
    
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
            console.log("hit this case");
            l1.next = new ListNode(0, null);
        }
        
        if (l2.next === null && l1.next !== null || l1.next === null && remainder !== 0) {
            console.log("Hit that case");
            l2.next = new ListNode(0, null);
        }
        
        if (l1.next === null && l2.next === null) {
            console.log("hit edge case");
            return head;
        }
        
        inner(l1.next, l2.next, remainder);
        
    };
    inner(l1, l2, 0);
    return head;
    
};