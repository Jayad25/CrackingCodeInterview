// rotating an array with 0(1) and 0(n)
def rotate(nums, k)
    result = nums.clone
    result.each_with_index do |n,i|
        nums[i]= result[(i-k)%result.length]
    end
    nums
end
p rotate([1,2,3,4,5,6,7],3)