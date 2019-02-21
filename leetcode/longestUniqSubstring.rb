def length_of_longest_substring(s)
    sub_strings = sub_string(s)
    (sub_strings.length-1).downto(0) do |i|
        return sub_strings[i].length if sub_strings[i].length == sub_strings[i].split("").uniq.length
    end
end

def sub_string(s)
    sub_strings = []
    (0..s.length-1).each do |i|
        (i).upto(s.length-1) do |j|
            sub_strings.push(s[i,j]) unless sub_strings.include?(s[i,j])
        end
    end
    sub_strings.push(s).sort_by {|ch| ch.length}
end
p sub_string("bbbbb")
p length_of_longest_substring("pwwkew")