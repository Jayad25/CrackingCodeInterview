def rotLeft(a, d)
    result  = []
   
        a.each_with_index do |n,i|
            result.push(a[(i+d) % a.length])
        end
        result
       
end

p rotLeft([1,2,3,4,5],4)