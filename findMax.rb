def findMaximum(a, m)
    # Write your code here
mSubsets = []
samp = subsets(a)

samp.each do |s|
    mSubsets.push(s) if s.length == m
end
globalMax = 0;
mSubsets.each do |sub|
    curretMin = 10 ^ 18
    sub.each_with_index do |x,i|
        (i+1).upto(sub.length-1) do |j|
            y = sub[j]
            absDif = (x-y).abs
            curretMin = absDif if absDif < curretMin
        end
    end
    globalMax = curretMin if curretMin > globalMax
end
globalMax


end
def subsets(array)
    return [[]] if array.empty?
    subs = subsets(array.take(array.length - 1))
    subs.concat(subs.map { |sub| sub + [array.last] })
end

a = [2,3,5,9]
 m = 3
p findMaximum(a,m)