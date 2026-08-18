import { useUser } from "@/src/hooks/useUser";

export default async function User({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {

  const { userId } = await params;
  const {data} = useUser();

  return <div>{userId} {data?.id}</div>;
}
