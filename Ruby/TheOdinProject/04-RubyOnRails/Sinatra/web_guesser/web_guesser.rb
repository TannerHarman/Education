require 'sinatra'
require 'sinatra/reloader'

set n: rand(100) + 1

get '/' do
  guess = params['guess']
  message = check_guess(guess)
  color = background_color(guess)

  erb :index, locals: {
                        number: settings.n, 
                        guess: guess,
                        message: message,
                        color: color,
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
    'You got it right!'
  end
end

def check_guess(guess)
  if guess == nil
    "You haven't guessed yet!"
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
  elsif message(guess) == 'You got it right!'
    'green'
  else 
    'white'
  end
end