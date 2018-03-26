puts 'Hello there, what\'s your first name?'
first_name = gets.chomp

puts 'Hello there, what\'s your Middle name?'
middle_name = gets.chomp

puts 'Hello there, what\'s your Last name?'
last_name = gets.chomp


puts "Your name is #{first_name} #{middle_name.split("").first} #{last_name}? What a lovely name!"
puts "Nice to meet you #{first_name} #{middle_name[0]} #{last_name}"