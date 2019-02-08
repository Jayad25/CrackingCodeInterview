// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        // let current_node = this
        // while (true) {
        //     if (value < current_node.value) {
        //         if (current_node.left === null) {
        //             current_node.left = new BST(value)
        //             break
        //         } else {
        //             current_node = current_node.left
        //         }
        //     }
        //     else {
        //         if (current_node.right === null) {
        //             current_node.right = new BST(value)
        //             break;
        //         } else {
        //             current_node = current_node.right

        //         }
        //     }
        // }
        // return this;
        let current_node = this
        while (current_node.left !== null && current_node.right !== null) {
            if (value < current_node.value) {
                current_node = current_node.left
            } else {
                current_node = current_node.right
            }
        }
        if (value < current_node.value) {
            current_node.left = new BST(value)
        } else {
            current_node.right = new BST(value)
        }
        return this;
    }

    contains(value) {
        // Write your code here.
        let current_node = this
        while (current_node !== null) {
            if (value < current_node.value) {
                current_node = current_node.left
            } else if (value > current_node.value) {
                current_node = current_node.right
            } else {
                return true
            }
        }
        return false
    }

    remove(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
        return this;
    }
}

// Do not edit the line below.
exports.BST = BST;
