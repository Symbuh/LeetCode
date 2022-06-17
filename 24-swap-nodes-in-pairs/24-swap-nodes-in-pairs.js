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


var swapPairs = function(head) {
    
    if (!head || !head.next) {
        return head;
    }
    
    let temp = head;
    let node = head.next;
    temp.next = node.next;
    node.next = temp;
    head = node;
    node = temp.next;
    
    let prev = temp
    
    // Making use of the Optional Chaining operator in order to handle this case. 
    while (!!node?.next) {
        temp = node.next;
        node.next = node.next.next;
        temp.next = node;
        prev.next = temp;
        prev = node;
        node = node.next;
    }
    
    return head;
    
};