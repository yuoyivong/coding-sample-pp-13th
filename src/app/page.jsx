import SearchComponent from "@/components/SearchComponent";

export default async function Home({ searchParams }) {
  const { query } = await searchParams;
  return (
    <div>
      <SearchComponent />
      <h1>Main page {query}</h1>
    </div>
  );
}
