# When running the program, we are gettng the argument of what file we want to work with in our script
filename = ARGV.first

# With the User input we are opening the txt file
txt = open(filename)

# Now we are printing out the conents of the file we opened.
puts "Here's your file #{filename}:"
puts txt.read

puts "\n"

# We are repeating the same step above using gets.chomp instead of an argument.
print "Type the filename again: "
file_again = $stdin.gets.chomp

txt_again = open(file_again)

puts txt_again.read

close(filename)
close(txt_again)