function highestSumOf3(arrayOfInts) {
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1])
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1])
    let highestSumOf2 = arrayOfInts[0] + arrayOfInts[1]
    let lowestSumOf2 = arrayOfInts[0] + arrayOfInts[1]
    let highestSumOf3 = arrayOfInts[0] + arrayOfInts[1] + arrayOfInts[2]


    for (let i = 2; i < arrayOfInts.length ; i++) {
        const current = arrayOfInts[i]
        highestSumOf3 = Math.max(highestSumOf3, current + highestSumOf2, current + lowestSumOf2)
        highestSumOf2 = Math.max(highestSumOf2, current + highest, current + lowest)
        lowestSumOf2 = Math.min(lowestSumOf2, current + highest, current + lowest)
        highest = Math.max(current, highest)
        lowest = Math.min(current, lowest)
    }
    return highestSumOf3

}

console.log(highestSumOf3([1,2,9,5,6,7,8]))
