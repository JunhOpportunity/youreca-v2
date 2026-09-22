import Reviews from "./Reviews";
import UserInfo from "./UserInfo";

export default async function User({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <main className="mx-auto max-w-4xl px-6">
      <UserInfo userId={userId} />
      <Reviews targetUserId={userId} />
    </main>
  );
}
