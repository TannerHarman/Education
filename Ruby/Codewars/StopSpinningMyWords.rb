def spinWords(string)
  phrase = string.split.map!

  new_phrase = phrase.each do |s|
    if s.length > 4 
      s.reverse
    else
      s
    end
  end
    new_phrase.join(' ')
end

puts spinWords("Hey fellow warriors")
puts spinWords("This is a test")
puts spinWords("This is another test")