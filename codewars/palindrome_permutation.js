function hasPalindromePermutation(string){
    let unpairedCharcter = new Set()
    for(let char of string){
        if (unpairedCharcter.has(char)){
            unpairedCharcter.delete(char)
        }else{
            unpairedCharcter.add(char)
        }
    }
    return unpairedCharcter.size <= 1;
}

console.log(hasPalindromePermutation("civic"))