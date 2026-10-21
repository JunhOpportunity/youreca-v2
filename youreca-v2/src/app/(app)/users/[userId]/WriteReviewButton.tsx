"use client";

import { useRouter } from "next/navigation";

type Props = {
  userId: string;
};

export default function WriteReviewButton({ userId }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(`/users/${userId}/reviews/new`)}
      className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
    >
      평판 작성하러 가기
      <span aria-hidden="true">→</span>
    </button>
  );
}
