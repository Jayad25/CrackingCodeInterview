# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
     l1 if l2.nil?
    l2 if l1.nil?
    
    add_to_next = 0
    
    dummy = ListNode.new(-1)
    dummy.next = ListNode.new(0)
    current_node = dummy
    
    while !l1.nil? || !l2.nil? do
        num_1 = l1.nil? ? 0 : l1.val
        num_2 = l2.nil? ? 0 : l2.val
        
        sum = num_1 + num_2 + add_to_next
        
        current_node.next = ListNode.new(sum % 10)
        
        add_to_next = sum / 10

        current_node = current_node.next
        
        l1 = l1.next unless l1.nil?
        l2 = l2.next unless l2.nil?
    end
    
    current_node.next = ListNode.new(1) if add_to_next == 1
    
    return dummy.next
end