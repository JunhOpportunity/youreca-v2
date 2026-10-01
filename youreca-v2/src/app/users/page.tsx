import SearchUI from "./SearchUI";
import UsersList from "./UsersList";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;

  return (
    <main className="mx-auto max-w-6xl px-6">
      <SearchUI />
      <UsersList keyword={keyword} />
    </main>
  );
}
