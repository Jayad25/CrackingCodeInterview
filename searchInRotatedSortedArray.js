
function search(nums,target){

}
function pivot(s,e,nums){
    
    let m = Math.floor((s + e) / 2)
    // console.log(m)
    if(nums[m] > nums[m+1]){
        return m+1
    }
    else if(nums[s] > nums[m]){
         pivot(s,m-1,nums)
    }else{
         pivot(m+1,e,nums)
    }
}
nums = [2,3,4,5,1]

console.log(pivot(0,nums.length,nums))