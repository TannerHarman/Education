class Book
# write your code here

  def title(book_title)
    @book_title = book_title.capitalize
  end
end

puts Book.new(title("inferno"))