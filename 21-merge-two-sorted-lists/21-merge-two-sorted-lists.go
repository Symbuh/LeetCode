/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    var head *ListNode
    
    if list1 == nil && list2 != nil {
        return list2
    }
    
    if list1 == nil && list2 == nil || list1 != nil && list2 == nil {
        return list1
    }
    
    if list1.Val <= list2.Val {
        head = &ListNode{Val: list1.Val, Next: nil}
        list1 = list1.Next
    } else {
        head = &ListNode{Val: list2.Val, Next: nil}
        list2 = list2.Next
    }
    
    var node = head
    
    for list2 != nil && list1 != nil {
        if list1.Val < list2.Val {
            node.Next = &ListNode{Val: list1.Val, Next: nil}
            list1 = list1.Next
        } else {
            node.Next = &ListNode{Val: list2.Val, Next: nil}
            list2 = list2.Next
        }
        node = node.Next
    }
    
    var remainingList *ListNode
    
    if list2 == nil && list1 != nil {
        remainingList = list1
    }
    
    if list1 == nil && list2 != nil {
        remainingList = list2
    }
    
    for remainingList != nil {
        node.Next = &ListNode{Val: remainingList.Val, Next: nil}
        node = node.Next
        remainingList = remainingList.Next
    }
    
    return head
    
}