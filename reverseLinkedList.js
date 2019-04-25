class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverse(headOfList) {
    let currentNode = headOfList
    let prevNode = null
    let nextNode = null
    while(currentNode){
        nextNode = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = nextNode
    }
    return prevNode
}
