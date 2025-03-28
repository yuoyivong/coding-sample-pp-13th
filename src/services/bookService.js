import headerToken from "@/lib/headerToken";

export const getAllBooks = async () => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/book`,
    {
      headers,
    }
  );
  const books = await response.json();
  return books;
};
