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
        Given the head of a singly linked list return true if it is a palendrome.
        
        1. Iterate through the list
        2. Create a string based on the linked list
            (I think this may defeat the purpose of the excersize)
        
    */
    let current = head;
    let myString = ''
    myString += current.val;
    while (current.next !== null) {
        current = current.next;
        myString += current.val;
    }
    let subString = myString.substring(Math.floor(myString.length/2));
    let reverseSubString = '';
    for (let i = 0; i < subString.length; i++) {
        reverseSubString = subString[i] + reverseSubString;
    }
    if (myString.startsWith(reverseSubString)) {
        return true;
    }
    return false;
};