function smallestDifference(arrayOne, arrayTwo) {
    let count = Math.abs(arrayOne[0] - arrayTwo[0])
    let result = [arrayOne[0], arrayTwo[0]]
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (count > Math.abs(arrayOne[i] - arrayTwo[j])) {
                result = [arrayOne[i], arrayTwo[j]]

                count = Math.abs(arrayOne[i] - arrayTwo[j])
            }
        }
    }
    return result
}