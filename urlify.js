
const urlify = (string) =>{
    let array = string.split(" ")
    let new_array = []
    for(let i = 0; i < array.length;i++)
    {
        if(array[i] !== "")
        {
            new_array.push(array[i])
        }

    }
    return new_array.join("%20")
}

console.log(urlify("Mr John Smith    ", 13) === "Mr%20John%20Smith");