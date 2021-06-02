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
var isPalindrome = function(head) {
    /*
        I don't understand why this works at all
    */
    
    let node = head;
    let vode = head;
    let flag = true;
    backtrack(node);
    function backtrack(node) {
        node.next && backtrack(node.next);
        if (node.val !== vode.val) flag = false;
        vode = vode.next;
    }
    return flag;
};