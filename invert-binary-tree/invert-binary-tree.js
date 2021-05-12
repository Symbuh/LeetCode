/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
//     let temp = root[1];
//     root[1] = root[2];
//     root[2] = temp;
    
//     let temp2;
//     for (let i = 3; i < root.length; i = i + 2) {
//         temp = [root[i], root[i+1]]
//         temp2 = root[i + 1];
//     
    // if(!root || !root.left || !root.right) {
    //     return root;
    // }
    // if(root && root.length < 2) {
    //     return root;
    // }
    let inner = (node) => {
        if (!node || !node.left && !node.right) {
            return;
        }
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        inner(node.left);
        inner(node.right);
    }
    inner(root);
    return root;
};