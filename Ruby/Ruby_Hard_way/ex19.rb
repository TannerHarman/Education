# def cheese_and_crackers(cheese_count, boxes_of_crackers)
#   puts "You have #{cheese_count} cheeses!"
#   puts "You have #{boxes_of_crackers} boxes of crackers!"
#   puts "Man that's enough for a party!"
#   puts "Get a blanket.\n\n"
# end

# puts "We can just give the function numbers directly:"
# cheese_and_crackers(20, 30)

# puts "OR, we can use variables from our script:"
# amount_of_cheese = 10
# amount_of_crackers = 50

# cheese_and_crackers(amount_of_cheese, amount_of_crackers)

# puts "We can even do math inside too:"
# cheese_and_crackers(10 + 20, 5 + 6)

# puts "And we can combine the two, variables and math:"
# cheese_and_crackers(amount_of_cheese + 100, amount_of_crackers + 1000 )

#Function of my own design

def need_a_job(money_made, hours_worked)
  puts "I really love to code!"
  puts "I'd love to get paid to code!"
  puts "I need to earn $#{money_made} a month to make it worth while."
  puts "I'd give a dedicated #{hours_worked} hours per week in exchange for that $#{money_made} every Month!"
  puts "That's #{money_made/(hours_worked*4)}/hr!\n\n"
end

puts "Direct input Method Call:"
need_a_job(4000, 40)

puts "Mathmatical Method Call:"
need_a_job(1000+3700, 20 + 10)

puts "Variable Storage Method Call:"
monthly_income = 4500
weekly_hours = 25
need_a_job(monthly_income, weekly_hours)

puts "Input from User Method Call:"
puts "How much money would you like to make?"
monthly_income = gets.chomp.to_i
puts "How many hours do can you work?"
weekly_hours = gets.chomp.to_i
need_a_job(monthly_income, weekly_hours)
