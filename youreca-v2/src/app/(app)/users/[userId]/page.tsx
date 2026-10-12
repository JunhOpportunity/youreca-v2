import Reviews from "./Reviews";
import UserInfo from "./UserInfo";

export default async function User({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-14">
        <UserInfo userId={userId} />
        <section className="mt-10">
          <div className="mb-2">
            <p className="text-xs font-semibold tracking-widest text-blue-600">
              REVIEWS
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl">
              다른 사람들이 남긴 평판
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              함께한 사람들이 바라본 모습과 강점을 확인해보세요.
            </p>
          </div>

          <Reviews targetUserId={userId} />
        </section>
      </div>
    </main>
  );
}
