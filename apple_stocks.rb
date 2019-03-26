def get_max_profit(stock_prices)
    if stock_prices.length < 2
        raise ArgumentErros, 'need 2 stocks'
    end
    min_price = stock_prices[0]
    max_profit = stock_prices[1] - stock_prices[0]

    stock_prices.each_with_index do |current_price,index|
        next if index.Zero?

        profit = current_price - min_price
        max_profit = [max_profit,profit].max
        min_price = [min_price,current_price].min
    end
    max_profit
end