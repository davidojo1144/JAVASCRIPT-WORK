//Determine if a binary tree is a valid BST (left subtree nodes < root < right subtree nodes).

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const isValidBST = (root, min = -Infinity, max = Infinity)=> {
  if (!root) return true;
  if (root.value <= min || root.value >= max) return false;
  return (
    isValidBST(root.left, min, root.value) &&
    isValidBST(root.right, root.value, max)
  );
}


const tree = new Node(5);
tree.left = new Node(3);
tree.right = new Node(7);
tree.left.right = new Node(4); 

console.log(isValidBST(tree)); 