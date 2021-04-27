/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let current = head; 
    let index = 1;
    let priev;
    let reverseTail = null;
    let revStartPriev = null;
    let revStart = null;
    let constructing = false;
    if(left === right || head.next === null) {
        return head;
    }
    /*
        Instead of the above implementation we may need
        to create new nodes for each of the nodes that we're 
        switching around.
    */
    while(current !== null) {
        if (index === left) {
            if (index !== 1) {
                // If we don't enter this case revStartPrev is going to be null. 
                revStartPriev = priev;
            }
            constructing = true;
            reverseTail = current;
            priev = current;
            current = current.next;
            index++;
        } else if (index === right && reverseTail !== null) {
            let temp = current;
            current = current.next;
            
            temp.next = priev;
            priev = temp;
            if (revStartPriev !== null) {
                revStartPriev.next = priev;
            } else {
                head = priev;
            }
            constructing = false;
            reverseTail.next = current;
            index++;
        } else if (constructing === true && current.next !== null) {
            let temp = current;
            current = current.next;
            reverseTail.next = current;
            temp.next = priev;
            priev = temp;
            if (revStartPriev !== null) {
                revStartPriev.next = priev;
            } else {
                head = priev;
            }
            index++;
        } else {
            priev = current;
            current = current.next;
            index++
        }
        
        
    }
    current = head;
    return head;
};