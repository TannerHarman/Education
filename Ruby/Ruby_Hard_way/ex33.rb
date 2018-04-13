# def while_loop(increment, number)
#   i = 0
#   numbers = []

#   while i <= number
#     puts "i currently equals #{i}"
#     numbers.push(i)

#     i += increment
#     puts "Numbers array is: ", numbers.join(', ')
#     puts "i has been updated to #{i}\n\n"
#     # sleep(5)
#   end

#   puts "The Numbers: "
#   puts numbers.join(', ')
# end

# while_loop(2, 4)

# For Loop Version

def for_loop(top_number)
  numbers = []

  (0..top_number).each do |i|
    puts "i currently equals #{i}"
    numbers.push(i)

    puts "Numbers array is: ", numbers.join(' -> ')
    puts "i has been updated to #{i}\n\n"
    # sleep(5)
  end

  puts "The Numbers: "
  puts numbers.join(' -> ')
end

for_loop(4)