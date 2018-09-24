puts "What\'s your Favorite Number"
number = gets.chomp

puts "#{number} is a great number, but #{number.to_i + 1} is bigger, so that makes it better? Wouldn't you agree?"

puts "yes or no?"

response = gets.chomp.downcase

if response == "no"
  puts "Well, what do you know anyway! You're just a fat Human"
elsif response == "yes"
  puts "I'm glad you have agreed to the superior intelect of the computational race"
else
  puts "You should really learn to choose between the answers given"
end