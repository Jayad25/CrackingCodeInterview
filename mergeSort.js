function mergeSort(array) {
    if (array.length <= 1)
        return array
    let middle = array.length / 2
    let left = mergeSort(array.slice(0, middle))
    let right = mergeSort(array.slice(middle))
    return  merge(left, right)
}
function merge(left, right) {
    let result = []
    
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return result.concat(left).concat(right)
}

console.log(mergeSort([8,5,1, 3, 8, 2, 4]))