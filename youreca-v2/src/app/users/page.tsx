import SearchUI from "./SearchUI";
import UsersList from "./UsersList";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;

  return (
    <div>
      <SearchUI />
      검색 결과 : {keyword}
      <UsersList keyword={keyword} />
    </div>
  );
}
