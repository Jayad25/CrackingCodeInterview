def length_of_longest_substring(s)
    sub_strings = sub_string(s)
    (sub_strings.length-1).downto(0) do |i|
        return sub_strings[i].length if sub_strings[i].length == sub_strings[i].split("").uniq.length
    end
end

def sub_string(s)
    sub_strings = []

    (0...s.length-1).each do |i|
       
        (i).upto(s.length) do |j|
             p i, j
             p  s[i..j]
            sub_strings.push(s[i..j]) 
        end
    end
    sub_strings.sort_by {|ch| ch.length}
end
p sub_string("cdd")
p length_of_longest_substring("cdd")