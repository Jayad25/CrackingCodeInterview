def subsets(array)
    return [[]] if array.empty?
    subs = subsets(array.take(array.length - 1))
    subs.concat(subs.map { |sub| sub + [array.last] })
  end

 
  def checksum(array,target)
  p  subset = subsets(array)
    count = 0
    subset.each do |sub|
        count += 1 if sub.reduce(:*) == target
    end
    count
end
p checksum([2,4,6,10],20)
