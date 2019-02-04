//O(n2)

function smallestDifference(arrayOne, arrayTwo) {
    let count = Math.abs(arrayOne[0] - arrayTwo[0])
    let result = [arrayOne[0], arrayTwo[0]]
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (count > Math.abs(arrayOne[i] - arrayTwo[j])) {
                result = [arrayOne[i], arrayTwo[j]]

                count = Math.abs(arrayOne[i] - arrayTwo[j])
            }
        }
    }
    return result
}
function smallestDifference1(arrayOne, arrayTwo) {
    arrayOne.sort((a,b) => a-b)
    arrayTwo.sort((a,b) => a-b)
    let idxOne = 0 
    let idxTwo = 0
    let current = Infinity;
    let pair = []
    let small  = Infinity;
    while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){
        let firstNum = arrayOne[idxOne]
        let secondNum = arrayTwo[idxTwo]
        if (firstNum < secondNum){
            current = secondNum - firstNum
            idxOne++
        } else if(secondNum < firstNum){
            current = firstNum - secondNum
            idxTwo++
        }else{
            return [firstNum,secondNum]
        }
        if (small > current){
            small = current
            pair = [firstNum,secondNum]
        }
    }
    return pair
}
let arrayOne = [-1,5,10,20,28,3]
let arrayTwo = [26,134,135,15,17]
console.log(smallestDifference1(arrayOne,arrayTwo))
