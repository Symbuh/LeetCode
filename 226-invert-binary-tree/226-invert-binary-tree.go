/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
    /*
        Okay this should be pretty simple 
            We just need to check the left and right node 
            and then swap the left and the right for each node. 
    */
    var helper func(node *TreeNode)
    
    helper = func(node *TreeNode) {
        if node.Left != nil || node.Right != nil {
            temp := node.Left 
            node.Left = node.Right
            node.Right = temp
        }  
        
        if node.Left != nil {
            helper(node.Left)
        }
        
        if node.Right != nil {
            helper(node.Right)
        }
    }
    
    if root == nil {
        return root
    }
    
    helper(root)
    
    return root
}