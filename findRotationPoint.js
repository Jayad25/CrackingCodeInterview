function findRotationPoint(words){
    let middle = Math.floor(words.length/2)
    
    if(words[middle] < words[middle+1]){
       
        return middle+1
    }else if(words[0] > words[middle]){
        return findRotationPoint(words.slice(0,middle))
    }else{
        return findRotationPoint(words.slice(middle+1))
    }
}
const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];
// console.log(Math.floor(words.length / 2))

console.log(findRotationPoint(words))