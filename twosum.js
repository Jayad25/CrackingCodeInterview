function twoNumberSum(array, targetSum) {
    // Write your code here.
    result = []
    seen = {}
    for (let i = 0; i < array.length; i++) {
        let number = targetSum - array[i]
        if (seen.hasOwnProperty(number)) {
           if(array[i] < number){
            result.push(array[i])
            result.push(number)
           }else{
               result.push(number)
               result.push(array[i])
           }
            return result;
        } else {
            seen[array[i]] = true;
        }
    }
    return result
}

console.log(twoNumberSum([1,2,3,4,5,6,7,8,9,15],18))