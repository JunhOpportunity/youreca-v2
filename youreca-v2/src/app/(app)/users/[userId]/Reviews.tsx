"use client";

import ReviewCard from "./ReviewCard";
import { useReviews } from "@/src/hooks/useReviews";

type Props = {
  targetUserId: string;
};

export default function Reviews({ targetUserId }: Props) {
  const { data, isPending, isError } = useReviews(targetUserId);

  if (isPending) {
    return (
      <div className="mt-6 divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-200 bg-white px-6 sm:px-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="animate-pulse py-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-100" />
              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-zinc-100" />
                <div className="h-3 w-32 rounded bg-zinc-100" />
              </div>
            </div>
            <div className="mt-5 h-4 w-40 rounded bg-zinc-100" />
            <div className="mt-3 h-4 w-full rounded bg-zinc-100" />
            <div className="mt-2 h-4 w-4/5 rounded bg-zinc-100" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white px-6 py-12 text-center">
        <p className="text-sm text-zinc-600">
          평판을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.
        </p>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white px-6 py-14 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-xl text-zinc-500">
          ✦
        </div>
        <h3 className="mt-4 text-base font-semibold text-zinc-950">
          아직 등록된 평판이 없습니다.
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          이 사람과 함께한 경험이 쌓이면 이곳에서 평판을 확인할 수 있습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 divide-y divide-zinc-100 overflow-hidden rounded-2xl border border-zinc-200 bg-white px-5 sm:px-8">
      {data.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </div>
  );
}
