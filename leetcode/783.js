// https://leetcode.com/problems/minimum-distance-between-bst-nodes/

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
 * @return {number}
 */
var minDiffInBST = function(root) {
  let res = Infinity;

  res = dfs(root, res)
  return res;
};

function dfs(node, minDiff) {
  let leftDiff = minDiff, rightDiff = minDiff;

  if (node !== null) {
    if (node.left) {
      leftDiff = Math.min((Math.abs(node.val - node.left.val)), minDiff)
      leftDiff = dfs(node.left, leftDiff)
    }
    if (node.right) {
      rightDiff = Math.min((Math.abs(node.val - node.right.val)), minDiff)
      rightDiff = dfs(node.right, rightDiff)
    }
  }

  let diff = Math.min(leftDiff, rightDiff)

  return diff;
}