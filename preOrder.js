var verifyPreorder = function (preorder) {
    var root = Number.MIN_SAFE_INTEGER;
    console.log(root)
    var stack = [];
    for (num of preorder) {
        if (num < root)
            return false;
        var n = stack.length;
        while (n > 0 && stack[n - 1] < num) {
            root = stack.pop();
            n = stack.length;
        }
        stack.push(num);
    }
    return true;
};

console.log(verifyPreorder([5, 2, 6, 1, 3]))