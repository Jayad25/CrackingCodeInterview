const stringComparison = (string) =>{
    result = [string[0],1];
    count = 1
    for(let i = 1;i<string.length;i++){
        if(result[result.length - 2] == string[i]){
            result[result.length-1] += 1
        }else{
            result.push(string[i]);
            result.push(1)
        }
    }
    if(string.length <= result.length){
        return string
    }else{
        return result.join("")
    }
}

console.log(stringComparison("aaabaa"))