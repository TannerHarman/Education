def ceaser_cipher(key, input)
  
  output = input.split("").map do |l|
    if l.ord == 32
      convert = l.ord
    elsif l.ord + key > 122
       convert = l.ord + (key - 26)
    elsif l.ord + key < 97
      convert = l.ord + (key + 26)
    else 
      convert = l.ord + key
    end
    convert.chr
  end

  output.join("")
  
end

puts ceaser_cipher(-3, "abcdefghijklmnopqrstuvwxyz")