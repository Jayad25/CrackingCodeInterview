function findSubArray(array,minsum){
    let subArray = subArray1(array)
    for(let i = 0 ; i < subArray.length ; i++){
        let i_sum = subArray[i].reduce((a,b) => a+b,0)
        if(i_sum > minsum){
            return subArray[i].length
        }
    }
    return -1
}

function subArray1(array){
    subArrays = []
    for(let i = 0; i < array.length;i++){
        for(let j = i; j < array.length;j++){
            subArrays.push(array.slice(i,j+1))
        }
    }
    return subArrays.sort(function (a, b) { return a.length - b.length })
}
console.log(findSubArray([1, 2, 3, 4],5));
console.log(subArray1([1, 2, 3, 4]));