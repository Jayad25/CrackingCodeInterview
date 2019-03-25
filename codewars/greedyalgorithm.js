function SortScores(unorderedScores,highestPossibleScore){
    const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
    unorderedScores.forEach(score => {
        scoreCounts[score]++;
    });
    const sortedScores = [];

    for(let score = highestPossibleScore; score >= 0; score--){
        const count = scoreCounts[score];

        for(let time = 0; time < count; time++){
            sortedScores.push(score);
        }
    }
    return sortedScores;
}