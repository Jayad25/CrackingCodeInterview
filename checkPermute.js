const checkPermute = (string1,string2) => {
    if (string1.length !== string2.length){
        return false;
    }else{
        string1Sorted = string1.split("").sort().join("")
        string2Sorted = string2.split("").sort().join("")
            if(string1Sorted === string2Sorted){
                return true;
            }else{
                return false;
            }
    }

}

console.log(checkPermute("aba", "aab"), true);

console.log(checkPermute("aba", "aaba"), false);

console.log(checkPermute("aba", "aa"), false);