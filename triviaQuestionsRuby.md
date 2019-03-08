```
Question: 
val1 = true and false  # hint: output of this statement in IRB is NOT value of val1!
val2 = true && false

Answer:
(val1 = true) and false    # results in val1 being equal to true
val2 = (true && false)     # results in val2 being equal to false
```
Question:
Which of the expressions listed below will result in "false"?
```
true    ? "true" : "false"
false   ? "true" : "false"
nil     ? "true" : "false"
1       ? "true" : "false"
0       ? "true" : "false"
"false" ? "true" : "false"
""      ? "true" : "false"
[]      ? "true" : "false"
```
Answer: 
false   ? "true" : "false"
nil     ? "true" : "false"

In Ruby, the only values that evaluate to false are false and nil. Everything else – even zero (0) and an empty array ([]) – evaluates to true.

Question: Write a function that sorts the keys in a hash by the length of the key as a string. For instance, the hash:
```
 x = { abc: 'hello', 'another_key' => 123, 4567 => 'third' }
should result in:

["abc", "4567", "another_key"]
```
Answer: x = x.keys.map(&:to_s).sort)by {|c| c.length}


Question: 
Consider the following two methods:
```
def times_two(arg1);
  puts arg1 * 2;
end

def sum(arg1, arg2);
  puts arg1 + arg2;
end
What will be the result of each of the following lines of code:


```
Answer:
times_two 5 10
times_two(5) 10
times_two (5) 10
sum 1, 2  3
sum(1, 2) 3
sum (1, 2) Syntax Error



Question:
 Consider the following code:
```
VAL = 'Global'
 
module Foo
  VAL = 'Foo Local'
 
  class Bar
    def value1
      VAL
    end
  end
end
 
class Foo::Bar
  def value2
    VAL
  end
end
What will be the value of each of the following:

Foo::Bar.new.value1 : 
Foo::Bar.new.value2
```

Question:

What is the difference between calling super and calling super()?

Answer:
A call to super invokes the parent method with the same arguments that were passed to the child method. An error will therefore occur if the arguments passed to the child method don’t match what the parent is expecting.

A call to super() invokes the parent method without any arguments, as presumably expected. As always, being explicit in your code is a good thing.

Question: 
Explain each of the following operators and how and when they should be used: ==, ===, eql?, equal?.

Answer: 

== – Checks if the value of two operands are equal (often overridden to provide a class-specific definition of equality).

=== – Specifically used to test equality within the when clause of a case statement (also often overridden to provide meaningful class-specific semantics in case statements).

eql? – Checks if the value and type of two operands are the same (as opposed to the == operator which compares values but ignores types). For example, 1 == 1.0 evaluates to true, whereas 1.eql?(1.0) evaluates to false.

equal? – Compares the identity of two objects; i.e., returns true iff both operands have the same object id (i.e., if they both refer to the same object). Note that this will return false when comparing two identical copies of the same object.


Question:
 ```
 Given:

x = "hello"
Explain the difference between:

x += " world"
and

x.concat " world"
```
The += operator re-initializes the variable with a new value, so a += b is equivalent to a = a + b.

Therefore, while it may seem that += is mutating the value, it’s actually creating a new object and pointing the the old variable to that new object.

This is perhaps easier to understand if written as follows:

foo = "foo"
foo2 = foo
foo.concat "bar"

puts foo
=> "foobar"
puts foo2
=> "foobar"

foo += "baz"
puts foo
=> "foobarbaz"
puts foo2
=> "foobar"
(Examining the object_id of foo and foo2 will also demonstrate that new objects are being created.)

The difference has implications for performance and also has different mutation behavior than one might expect.


