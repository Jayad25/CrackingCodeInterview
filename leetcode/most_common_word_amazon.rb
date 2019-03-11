def most_common_word(paragraph, banned)
    words = {}
    most_com = []
    paragraph.split(" ").each do |x|
        w = x.tr(",","").tr(".","").downcase
         if words.keys.include?(w) and w != banned
            words[w.downcase] += 1
            if most_com[1] < words[w]
                most_com[0] = w
                most_com[1] = words[w]
            elsif most_com.length === 0
                most_com[0] = w
                most_com[1] = words[w]
            end
         else
            words[w.downcase] = 1
            if most_com.length === 0
                most_com[0] = w
                most_com[1] = words[w]
            end
         end

    end
      most_com[0] 
end
para = "Bob hit a ball, the hit BALL flew far after it was hit."
p most_common_word(para,"hit")