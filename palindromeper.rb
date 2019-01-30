def permutation(string)
    array = string.split("").permutation.to_a
end



def palindrome(string)
    string.reverse() == string
end

def palindromeper(string)
    result = []
    permutations = permutation(string)
    permutations.each do |array|
        word = array.join("")
        result.push(word) if palindrome(word) and !result.include?(word)
    end
    result
end
p palindromeper("madam")