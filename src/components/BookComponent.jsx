"use client";
import delay from "@/lib/delay";
import { getAllBooks } from "@/services/bookService";
import { useBook, useCounter } from "@/stores/useStore";
import React, { useEffect } from "react";

export default function BookComponent() {
  //   const { books, isLoading, isError } = useBook();

  //   if (isLoading) return <div>loading .......</div>;
  //   if (isError) return <div>failed to fetch</div>;

  //   const bookList = await getAllBooks();

  //   const { count, increment } = useCounter();
  const { data, fetchData } = useBook();

  //   const handleFetch = () => {
  //     console.log("Log");
  //     fetchData();
  //   };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* {books?.map((book) => (
        <p key={book?.id}>{book?.bookTitle}</p>
      ))} */}

      {data?.map((book) => (
        <p key={book?.id}>{book?.bookTitle}</p>
      ))}

      {/* <button onClick={fetchData} className="bg-blue-600 rounded-xl p-2">
        Click
      </button> */}
    </div>
  );
}
