#write your code here
def ftoc(ftemp)
  (ftemp - 32) * (5.0/9.0)
end

# puts ftoc(20)

def ctof(ctemp)
  (ctemp * 9.0/5.0) + 32
end

puts ctof(100)