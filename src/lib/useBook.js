import useSWR from "swr";

export const useBook = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/books`,
    fetcher
  );

  return {
    books: data,
    isLoading,
    isError: error,
  };
};
