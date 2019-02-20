def first_missing_positive(nums)
   return 1 if nums.empty?
    max_num = nums.max
    (1..max_num).each do |n|
        return n unless nums.include?(n)
    end
    return max_num+1 if max_num > 0
    return 1
end
p first_missing_positive([1,2,0])
p first_missing_positive([3,4,-1,1])
p first_missing_positive([7,8,9,11,12])