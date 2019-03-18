def delete_nth(order,max_e)
  #your code here
  hash = {}
  order.each_with_index do |n,i|
    p n+i
        if hash.has_key?(n)
            if hash[n] == max_e
              
                order.delete_at(i)
            else
                hash[n] += 1
            end
        else
           hash[n] = 1
        end

    end
    order
end

p  delete_nth([1,2,1,1],1)
