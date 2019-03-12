function isValid(str){
    if(str.length <= 1){
        return false;
    }
    let stack = []
    let matchingBracket, ch
    let openingBrac = ['(','{','[']
    let ClosingBrac = [')','}',']']
    for(let i = 0 ; i < str.length;i++){
        if(openingBrac.indexOf(str[i]) > -1){
            stack.push(str[i])
        }else{
            if(ClosingBrac.indexOf(str[i]) === openingBrac.indexOf(stack[stack.length-1])){
                stack.pop()
            }else{
                return false
            }
        }

    }
return true
}
let str = "[(])"
console.log(isValid(str))