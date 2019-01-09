  #! /bin/bashclear

  first_num=
  second_num=

  echo -n "Enter the first number: "
  read first_num
  echo -n "Enter the second number: "
  read second_num

  echo "$first_num + $second_num = $((first_num + second_num))"
  echo "$first_num - $second_num = $((first_num - second_num))"
  echo "$first_num * $second_num = $((first_num * second_num))"
  echo "$first_num / $second_num = $((first_num / second_num))"
  echo "$first_num % $second_num = $((first_num % second_num))"
  echo "$first_num ** $second_num = $((first_num ** second_num))"