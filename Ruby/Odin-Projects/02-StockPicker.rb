def stock_picker(prices)
  buy = 0
  sell = 1
  profit = 0
  input = prices
  
  while buy < input.length do
    while sell < input.length do
      bought = prices[buy]
      sold = prices[sell]
      cash = sold - bought
      sell += 1

        if cash > profit
          profit = cash
        else
          profit = profit
        end
    end

    buy += 1
    sell = buy + 1
  end

  puts "Profit: $#{profit}\n"
end

stock_array = []

10.times do |n|
  stock_array << rand(50)
end

puts stock_picker(stock_array)