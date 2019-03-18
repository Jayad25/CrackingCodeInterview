def min(arr,k)
 res= []
  arr.each_with_index do |n,i|

    res.push(arr[i...(i+k)].min) if i+k <= arr.length
    end
    res.max]
end
 p min([1,1,1],2)