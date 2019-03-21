def merge_ranges(meetings)

   sorted_metings = meetings.sort

   merged_meetings = [sorted_metings[0]]
   sorted_metings[1..-1].each do |cur_start,cur_end|
  
        last_merge_star, last_merge_end = merged_meetings[-1]

        if cur_start <= last_merge_end
            merged_meetings[-1] = [last_merge_star,[last_merge_end,cur_end].max]
        else
            merged_meetings << [cur_start,cur_end]
        end
    end
    merged_meetings
end


meetings = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
puts merge_ranges(meetings)