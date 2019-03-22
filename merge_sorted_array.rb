def merge_sorted_array(array1,arra2)
     result_array = []
     count_array1 = 0
     count_array2 = 0
     while (count_array1 <= array1.length-1) && (count_array2 <= arra2.length-1)
        if array1[count_array1] < arra2[count_array2]
            result_array.push(array1[count_array1])
            count_array1 += 1
        else
            result_array.push(arra2[count_array2])
            count_array2 += 1
        end
    end
    result_array.concat(array1[count_array1..-1]).concat(arra2[count_array2..-1])
end

array1 = [1, 4, 7]
arra2 = [2,5,8]

p merge_sorted_array(array1,arra2)
p merge_sorted_array([],[])