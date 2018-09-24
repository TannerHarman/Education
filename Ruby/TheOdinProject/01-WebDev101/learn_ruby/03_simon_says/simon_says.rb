#write your code here
def echo(phrase)
  phrase
end

def shout(phrase)
  phrase.upcase
end

def repeat(phrase, multiple = 2)
  ([phrase] * multiple).join(" ")
end

def start_of_word(word, index)
  word[0..(index-1)]
end

def first_word(string)
  string.split.first
end

def titleize(word)
  little_word = ["the", "over", "and", "or"]
  words = word.split

  words.map do |letter|
    letter.capitalize! unless little_word.include?(letter) && letter != words[0]
  end

  words.join(" ")
end