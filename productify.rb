def productify(arr)
    result = []
    x = 1
    arr.each do |num|
        result.push(x)
        x = x * num
    end
    y = 1
    final = []
    (arr.size - 1).downto(0) do |i|
            result[i] = result[i] * y
            y = y * arr[i]
    end
    result
end

p productify([1,2,3])