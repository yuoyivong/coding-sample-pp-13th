// src/components/BookComponent.jsx

import { getAllBooks } from "@/services/bookService";
import React from "react";

export default async function BookComponent() {
  const bookList = await getAllBooks();

  return (
    <div className="grid grid-cols-5 space-y-8 my-12 container mx-auto">
      {bookList?.map((book) => (
        <div
          key={book?.id}
          className="bg-pink-200 m-5 p-5 rounded-xl drop-shadow-xl space-y-2"
        >
          <p className="text-2xl">
            {book?.id}. {book?.bookTitle}
          </p>
          <p>{book?.description}</p>
        </div>
      ))}
    </div>
  );
}
