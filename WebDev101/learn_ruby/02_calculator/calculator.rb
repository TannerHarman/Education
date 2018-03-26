#write your code here
def add(num1, num2)
  num1 + num2
end

def subtract(num1, num2)
  num1 - num2
end

def sum(arr)
  total = 0
  arr.each { |n| total += n }
  total
end

def multiply(*num)
  total = 1
  num.each { |n| total *= n}
  total
end

def power(num1, num2)
  num1 ** num2
end

def factorial(num)
  total = 1
  for n in 1..num
    total = total * n
  end
    total
end







# puts add(21, 8)

# puts subtract(21, 8)

# arr = 3.times.map do
#   rand(100)
# end

# puts arr
# puts "========="
# puts sum(arr)

# puts multiply(3, 3)

# puts power(2, 3)

# puts factorial(10)