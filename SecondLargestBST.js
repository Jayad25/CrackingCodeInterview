class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function findSecondLargest(treeRoot) {

    let currentNode = treeRoot
    while(currentNode){
        if(currentNode.left && !currentNode.right){
            return findLargest(currentNode.left)
        }
        if( currentNode.right && !currentNode.right.left && !currentNode.right.left){
            return currentNode.value
        }
        currentNode = currentNode.right
    }

  
}

function findLargest(treeRoot){
    currentNode = treeRoot
    while(currentNode){
        if(currentNode.right) {
            currentNode = currentNode.right
        }else{
            return currentNode
        }
    }
}
