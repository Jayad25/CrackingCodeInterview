def reverse!(str)
    left_index = 0
    right_index = str.length - 1
    while left_index < right_index
        str[left_index],str[right_index] = str[right_index],str[left_index]
        left_index += 1
        right_index -= 1
    end
    str
end

string = 'A'
 p reverse!(string)