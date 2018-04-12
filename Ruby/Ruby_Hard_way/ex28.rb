boolean_statements = {'true && true' => true && true,
                      "false && true" => false && true,
                      "1 == 1 && 2 == 1" => 1 == 1 && 2 == 1,
                      "'test' == 'test'" => "test" == "test",
                      "1 == 1 || 2 != 1" => 1 == 1 || 2 != 1,
                      "true && 1 == 1" => true && 1 == 1,
                      "false && 0 != 0" => false && 0 != 0,
                      "true || 1 == 1" => true || 1 == 1,
                      "'test' == 'testing'" => "test" == "testing",
                      "1 != 0 && 2 == 1" => 1 != 0 && 2 == 1,
                      "'test' != 'testing'" => "test" != "testing",
                      "'test' == 1" => "test" == 1,
                      "!(true && false)" => !(true && false),
                      "!(1 == 1 && 0 != 1)" => !(1 == 1 && 0 != 1),
                      "!(10 == 1 || 1000 == 1000)" =>!(10 == 1 || 1000 == 1000),
                      "!(1 != 10 || 3 == 4)" =>!(1 != 10 || 3 == 4),
                      "!('testing' == 'testing' && 'Zed' == 'Cool Guy')" => !("testing" == "testing" && "Zed" == "Cool Guy"),
                      "1 == 1 && (!('testing' == 1 || 1 == 0))" => 1 == 1 && (!("testing" == 1 || 1 == 0)),
                      "'chunky' == 'bacon' && (!(3 == 4 || 3 == 3))" => "chunky" == "bacon" && (!(3 == 4 || 3 == 3)),
                      "3 == 3 && (!('testing' == 'testing' || 'Ruby' == 'Fun'))" => 3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun"))
                    }

correct_answers = 0
wrong_answers = 0
current_question = 0
total_questions = boolean_statements.count

boolean_statements.each do |k, v|
  puts "Is the Statement True or False?"
  puts "#{k.to_s}"
  answer = gets.chomp
    if answer == v.to_s
      correct_answers += 1
      current_question += 1
      puts "\nGreat Job! You got it!"
      puts "#{current_question}/#{total_questions} questions answered\n\n"
      sleep(1.5)
    else 
      wrong_answers += 1
      current_question += 1
      puts "\nWrong Answer!"
      puts "#{current_question}/#{total_questions} questions answered\n\n"
      sleep(1.5)
    end
end

puts "Correct Answers: #{correct_answers}"
puts "Wrong Answers: #{wrong_answers}"
puts "Total Questions: #{total_questions}"