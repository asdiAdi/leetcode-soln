// 589. N-ary Tree Preorder Traversal.ts
class node {
    val: number
    children: node[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

// Recursion
function preorder(root: node | null, output = new Array ): number[] {
    if (!root) return output;
    output.push(root.val);
    root.children.forEach(child => preorder(child, output))
    return output;
};



// discussion
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/discuss/935012/Recursive-and-Iterative-JS-Solutions

// js-iterative
// var preorder = function(root) {
//     if (!root) return [];
//     let stack = [root], res = [];
//     while (stack.length > 0) {
//         let node = stack.pop();
//         res.push(node.val);
//         for (let i = node.children.length - 1; i >= 0; i--) {
//             if (node.children[i]) stack.push(node.children[i]);
//         }
//     }
//     return res;
//     // Time Complexity: O(N)
//     // Space Complexity: O(H)
// }

// ts-recursive same as mine