import Form from "next/form";

export default function SearchComponent() {
  return (
    <Form action={"/"}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </Form>
  );
}
