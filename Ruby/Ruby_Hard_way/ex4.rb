# Setting the value of cars equal to 100. Meaning there are literally 100 cars
 cars = 100
# The amount of passengers the car can hold
space_in_a_car = 4
# Drivers available to drive the cars
drivers = 30
# The amount of passengers we need to transport with our cars & drivers 
passengers = 90 
# Cars that will be unavailable for use because there are not enough drivers
cars_not_driven = cars - drivers
# Cars that will be utilized to drive
cars_driven = drivers
# The maximum amount of passengers we can carry with the cars available to drive
carpoos_capacity = cars_driven * space_in_a_car
# We're finding the average passanger per vehicle to use all of our vehicles 
average_passengers_per_car = passengers / cars_driven

puts "There are #{cars} cars available."
puts "There are only #{drivers} drivers available."
puts "There will be #{cars_not_driven} empty cars today."
puts "We can transport #{carpoos_capacity} people today."
puts "We have #{passengers} to carpool today."
puts "We need to put about #{average_passengers_per_car} in each car."