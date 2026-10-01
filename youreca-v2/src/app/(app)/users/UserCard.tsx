"use client";

import { Search } from "@/src/types/Search";
import { useRouter } from "next/navigation";

type Props = {
  user: Search;
};

export default function UserCard({ user }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/users/${user.id}`);
  };

  return (
    <article
      onClick={onClick}
      className="
        group cursor-pointer rounded-2xl
        border border-zinc-200 bg-white p-6
        transition duration-200
        hover:-translate-y-0.5
        hover:border-blue-200
        hover:shadow-md
      "
    >
      {/* 프로필 */}
      <div className="flex items-center gap-4">
        <div
          className="
            flex h-12 w-12 shrink-0 items-center justify-center
            rounded-full bg-blue-50
            text-sm font-bold text-blue-600
          "
        >
          {user.nickname.slice(0, 1)}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-zinc-950">
            {user.nickname}
          </h3>

          <p className="mt-1 truncate text-sm text-zinc-500">
            {user.job}
          </p>
        </div>
      </div>

      {/* 평판 키워드 */}
      <div className="mt-6">
        <p className="mb-3 text-xs font-medium text-zinc-400">
          주요 평판
        </p>

        <div className="flex flex-wrap gap-2">
          {user.keywords.slice(0, 4).map((keyword) => (
            <span
              key={keyword.name}
              className="
                rounded-full bg-zinc-100
                px-3 py-1.5
                text-xs font-medium text-zinc-700
              "
            >
              {keyword.name}
              <span className="ml-1 text-zinc-400">
                {keyword.count}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* 하단 */}
      <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
        <span className="text-sm text-zinc-500">
          평판{" "}
          <strong className="font-semibold text-zinc-900">
            {user.reviewCount}
          </strong>
          개
        </span>

        <span
          className="
            text-sm font-semibold text-zinc-500
            transition-colors
            group-hover:text-blue-600
          "
        >
          평판 보기 →
        </span>
      </div>
    </article>
  );
}