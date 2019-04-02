function getProductsOfAllIntsExceptAtIndex(intArray) {
    const result = []
    let product = 1;
    for(let i = 0; i < intArray.length ; i++){
        result[i] = product
        product *= intArray[i]
    }
    let reverse_product = 1
    for(let j = intArray.length - 1; j >= 0; j--){
        result[j] = result[j] * reverse_product;
        reverse_product *=   intArray[j]
    }
    return result
}

console.log(getProductsOfAllIntsExceptAtIndex([1,2,3]))