dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(words, dictionary)
  output = {}
  dictionary.map do |str|
    presence = words.scan(str).count
    if presence > 0
      output[str] = presence
    end
  end

  output.each do |k, v|
    puts "Appearences: '#{v}' | Word: '#{k}'"
  end
end

substrings("Howdy partner, sit down! How's it going?", dictionary)