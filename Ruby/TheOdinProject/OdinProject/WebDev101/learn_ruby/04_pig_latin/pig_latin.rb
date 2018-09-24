def translate(input)
  vowels = ['a', 'e' , 'i', 'o', 'u']
  word_a = input.split()

  result = ''

  word_a.each do |word|

    if vowels.include?(word[0])
      result << "#{word}ay"
    elsif word[0..1] == 'qu'
      result << " " + word[2..-1] + word[0..1] + 'ay'
    elsif vowels.include?(word[0]) == false && word[1..2] == 'qu'
      result << " " + word[3..-1] + word[0..2] + "ay"
    elsif vowels.include?(word[0]) == false && vowels.include?(word[1]) == true
      result << " " + "#{word[1..-1] + word[0]}ay"
    elsif vowels.include?(word[0]) == false && vowels.include?(word[1]) == false && vowels.include?(word[2]) == true
      result <<  " " + "#{word[2..-1] + word[0..1]}ay"
    elsif vowels.include?(word[0]) == false && vowels.include?(word[1]) == false && vowels.include?(word[2]) == false
      result <<  " " + "#{word[3..-1] + word[0..2]}ay"
    end

  end

  result.lstrip
end

puts translate("Andrea is Adorable")