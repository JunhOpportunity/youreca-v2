export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ searchId: string }>;
}) {

  const {searchId} = await searchParams;

  return <div>{searchId}</div>;
}
