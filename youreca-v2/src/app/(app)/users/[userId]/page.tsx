import Reviews from "./Reviews";
import UserInfo from "./UserInfo";
import WriteReviewButton from "./WriteReviewButton";

export default async function User({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="min-w-0">
            <div className="mb-6">
              <p className="text-xs font-semibold tracking-widest text-blue-600">
                REVIEWS
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
                다른 사람들이 남긴 평판
              </h1>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                함께한 사람들이 바라본 모습과 강점을 확인해보세요.
              </p>
            </div>
            <Reviews targetUserId={userId} />
          </section>
          {/* 오른쪽: 프로필 */}
          <aside className="min-w-0 lg:sticky lg:top-8">
            <UserInfo userId={userId} />
            <WriteReviewButton userId={userId} />
          </aside>
        </div>
      </div>
    </main>
  );
}
