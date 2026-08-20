import SearchUI from "./SearchUI";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ searchId: string }>;
}) {
  const { searchId } = await searchParams;

  const onSubmit = () => {
    console.log("검색");
  };

  return (
    <div>
      {searchId}
      <SearchUI />
    </div>
  );
}
