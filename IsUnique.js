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

console.log(IsUnique([1,2,3]))