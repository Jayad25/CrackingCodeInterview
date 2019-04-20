var generateParenthesis = function (n) {



    result = []
    for(let i = 0;i< n;i++){
        result += '()'
    }
   
    return permutations(result.split(''));
};
function permutations(array) {
    let result = [];
    if (array.length === 0) return [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            let str = m.join("")
            // console.log(result.indexOf(str))
            if(checkParanth(m) && result.indexOf(str) < 0){
            result.push(str)
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }

        return result;
    }
    return permute(array);
}
function checkParanth(array){
    const stack = []
    // console.log(array)
    for(let i = 0; i <array.length;i++){
        if(array[i] == '('){
            
            stack.push(array[i])
            // console.log(stack)
        }else{
            // console.log(stack)
            if(stack[stack.length-1] == '('){
                // console.log(stack)
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length == 0
}

console.log(generateParenthesis(3))
// console.log(checkParanth(['(', ')', '(', ')', '(', ')']))