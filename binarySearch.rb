def binarySearch(array, target) 
 return nil if array.empty?
 middle = array.length / 2
 return middle if(array[middle] === target)
 if(array[middle] < target)
    x = binarySearch(array.slice(middle+1,array.length),target)
    return  x === nil ? nil : x+middle+1
 else
    binarySearch(array.slice(0,middle),target)

 end
	
	
end
p binarySearch([1,2,3,4],1)
p binarySearch([1,2,3,4],2)
p binarySearch([1,2,3,4],3)
p binarySearch([1,2,3,4],4)
p binarySearch([1,2,3,4],5)