require 'sinatra'
require 'sinatra/reloader'

@@guess_limit = 10
set n: rand(100) + 1

get '/' do
  guess = params['guess']
  message = check_guess(guess)
  color = background_color(guess)
  @@guess_limit -= 1

  erb :index, locals: {
                        number: settings.n, 
                        guess: guess,
                        message: message,
                        color: color,
                        guesses: @@guess_limit,
                      }
end


def message(guess)
  n = settings.n
  guess = guess.to_i

  to_low = n - 5
  to_high = n + 5
  
  if guess > to_high
    'Way to High'
  elsif guess < to_low
    'Way to Low'
  elsif guess > n
    'To High'
  elsif guess < n
    'To Low'
  elsif guess == n
    reset_message(guess)
  end
end

def check_guess(guess)
  if guess == nil
    "You haven't guessed yet!"
  elsif @@guess_limit == 0 || guess == settings.n
    reset_game
    reset_message(guess)
  else
    message(guess)
  end
end

def background_color(guess)
  if check_guess(guess) == "You haven't guessed yet!"
    'white'
  elsif message(guess) == 'Way to High' || message(guess) == 'Way to Low'
    'red'
  elsif message(guess) == 'To High' || message(guess) == 'To Low'
    'rgba(255,0,0, 0.5)'
  elsif message(guess) == 'You got it right! Game has been Reset!'
    'green'
  else 
    'white'
  end
end

def reset_message(guess)
  if @@guess_limit == 0
    "You've run out of guesses, Game has been reset!"
  elsif guess == settings.n
    "You got it right! Game has been Reset!"
  end
end

def reset_game
  @@guess_limit = 10
  settings.n = rand(100) + 1
end

