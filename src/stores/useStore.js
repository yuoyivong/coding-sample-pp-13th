import { getAllBooks } from "@/services/bookService";

const { create } = require("zustand");

// a simple function to update state with onclick
const useCounter = create((set, get) => ({
  count: 0,
  increment: () => set(() => ({ count: get().count + 1 })),
}));

// a function to fetch data from api
const useBook = create((set) => ({
  data: null,
  fetchData: async () => {
    const books = await getAllBooks();
    set({ data: books });
  },
}));

export { useCounter, useBook };
