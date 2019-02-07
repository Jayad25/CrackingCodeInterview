function permutations(array) {
    let result = [];
    if (array.length === 0) return [];
    
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }

        return result;
    }
    return permute(array);
}

permutations([1, 2, 3])