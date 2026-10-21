"use client";

import { useUser } from "@/src/hooks/useUser";

type Props = {
  userId: string;
};

export default function UserInfo({ userId }: Props) {
  const { data, isPending, isError } = useUser(userId);

  if (isPending) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
        <div className="flex animate-pulse items-center gap-5">
          <div className="h-20 w-20 shrink-0 rounded-full bg-zinc-100" />
          <div className="flex-1 space-y-3">
            <div className="h-6 w-32 rounded bg-zinc-100" />
            <div className="h-4 w-24 rounded bg-zinc-100" />
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="rounded-3xl border border-zinc-200 bg-white px-6 py-10 text-center">
        <h1 className="text-lg font-semibold text-zinc-950">
          사용자 정보를 불러오지 못했습니다.
        </h1>
        <p className="mt-2 text-sm text-zinc-500">잠시 후 다시 시도해주세요.</p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-5">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-50 text-2xl font-bold text-blue-600 ring-4 ring-zinc-50 sm:h-24 sm:w-24">
          {data.profileImg ? (
            <img
              src={data.profileImg}
              alt={`${data.nickname} 프로필 이미지`}
              className="h-full w-full object-cover"
            />
          ) : (
            data.nickname.slice(0, 1)
          )}
        </div>
        <div className="min-w-0">
          

          <h1 className="mt-1 break-words text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
            {data.nickname}
          </h1>

          {data.job && (
            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              {data.job}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
