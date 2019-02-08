function triplets(array,target) {
    let result = []
    let sorted_array = array.sort((a,b) => a-b)
    for(let i =0;i<sorted_array.length-3;i++){
        for (let j = i+1; j < sorted_array.length - 2; j++) {
            for (let z = j+1; z < sorted_array.length - 1; z++) {
                if(sorted_array[i]+sorted_array[j]+sorted_array[z] === target)
                result.push([sorted_array[i],sorted_array[j],sorted_array[z]])
            }
        }
    }
    return result
}

console.log(triplets([12,3,1,2,-6,5,-8,6],0))