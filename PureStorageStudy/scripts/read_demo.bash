#! /bin/bash

echo -n "Hurry up! You've got to type something before the timer runs out!: "

if read -s -t 5 response; then
  echo -e "\nGreat, you responded in time with '$response'"
else
  echo -e "\n\nSorry, you took to long!"
fi