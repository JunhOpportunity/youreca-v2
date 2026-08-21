import Reviews from "./Reviews";
import UserInfo from "./UserInfo";

export default async function User({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <div>
      {userId}
      <UserInfo userId={userId} />
      <Reviews targetUserId={userId} />
    </div>
  );
}
