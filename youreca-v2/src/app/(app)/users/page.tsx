import SearchUI from "./SearchUI";
import UsersList from "./UsersList";

export default async function Users({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const { keyword } = await searchParams;

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold text-blue-600">
            PEOPLE
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            사람들의 평판을 찾아보세요
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
            이름이나 닉네임을 검색해 다른 사람들이 남긴
            평판과 키워드를 확인해보세요.
          </p>
        </div>

        <section className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4">
            <h2 className="text-base font-semibold text-zinc-950">
              사용자 검색
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              알고 싶은 사람의 이름이나 닉네임을 입력해주세요.
            </p>
          </div>

          <SearchUI />
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <h2 className="text-xl font-bold text-zinc-950">
                {keyword
                  ? `"${keyword}" 검색 결과`
                  : "사용자를 검색해보세요."}
              </h2>

              {keyword && (
                <p className="mt-1 text-sm text-zinc-500">
                  검색어와 일치하는 사용자를 확인해보세요.
                </p>
              )}
            </div>
          </div>

          <UsersList keyword={keyword} />
        </section>
      </section>
    </main>
  );
}