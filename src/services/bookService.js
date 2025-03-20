// get all books
export const getAllBooks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`);
  const books = await response.json();
  console.log(books);

  return books;
};
