
# Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

# Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

# Note: You are not suppose to use the library's sort function for this problem.

# Example:

# Input: [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]

def sort_colors(nums)
    count_0 = nums.count(0)
    count_1 = nums.count(1)
    count_2 = nums.count(2)
    
    count_0.times do |i|
        
        nums[i] = 0
    end
    
    count_1.times do |i|
        
        nums[count_0+i]=1
    end
    count_2.times do |i|
        
        nums[count_0+count_1+i] = 2
    end
    nums
end