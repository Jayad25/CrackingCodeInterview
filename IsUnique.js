const IsUniqueData = (array) => {
    for(let i = 0;i< array.length;i++){
        for(let j = i+1;j<array.length;j++){
            new_index = array.slice(j,array.length-1).indexOf(array[i])
                if(new_index > -1){
                    return false
                }
        }
    }
    return true;
}
// With Data structure
const IsUnique = (array) => {
    hash = {}
    for(let i = 0;i<array.length;i++){
        if (hash.hasOwnProperty(array[i])){
            return false
        }else{
            hash[array[i]] = true
        }
    }
    return true;
} 

console.log(IsUniqueData([1,2,3]))
console.log(IsUniqueData([1,1,3]))