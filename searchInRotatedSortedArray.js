var search = function (nums, target) {
    let pivotIndex = pivot(0, nums.length, nums)
    // console.log(pivotIndex)
    if (nums[pivotIndex] <= target && nums[nums.length - 1] >= target) {
        // console.log(nums.splice(pivotIndex))


        return pivotIndex + bSearch(nums.splice(pivotIndex), target)
    } else {
        // console.log(bSearch(nums.splice(0, pivotIndex), target))
        return bSearch(nums.splice(0, pivotIndex), target)
    }
};

function pivot(s,e,nums){
    
    let m = Math.floor((s + e) / 2)
    // console.log(m)
    if(nums[m] > nums[m+1]){
        return m+1
    }
    else if(nums[s] > nums[m]){
         return pivot(s,m-1,nums)
    }else{
         return pivot(m+1,e,nums)
    }
}
function bSearch(nums,target){
    if(nums.length === 0){
        return -1
    }
    mid = Math.floor(nums.length/2)
    if(nums[mid] === target){
        return mid+1;
    }else if (nums[mid] > target){
        return bSearch(nums.splice(0,mid),target)
    }else{
        x = mid;
        res=  bSearch(nums.splice(mid+1),target)
        // console.log(mid)
         return res == -1 ? -1 : res+1+x
    }
}







nums = [3,4,5,9,1,2]

// console.log(pivot(0,nums.length,nums))
// console.log("ejfbvd"+bSearch([3,4,5,9],9))
console.log(search(nums,5))