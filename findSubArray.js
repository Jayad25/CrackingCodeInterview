function findSubArray(array,minsum){

}

function subArray(array){
    subArrays = []
    for(let i = 0; i < array.length;i++){
        for(let j = i; j < array.length;j++){
            subArrays.push(array.slice(i,j))
        }
    }
    return subArrays.sort()
}
console.log(subArray([1,2,3,4]))