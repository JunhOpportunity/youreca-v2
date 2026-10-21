// SearchUI.tsx

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchUI() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) {
      router.push("/users");
      return;
    }

    router.push(`/users?keyword=${encodeURIComponent(trimmedKeyword)}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="이름이나 닉네임으로 검색해보세요"
            className="
              h-12 w-full rounded-xl border border-zinc-200
              bg-white pl-4 pr-4 text-sm text-zinc-900
              outline-none transition
              placeholder:text-zinc-400
              focus:border-blue-500
              focus:ring-4 focus:ring-blue-500/10
            "
          />
        </div>

        <button
          type="submit"
          className="
            h-12 rounded-xl bg-zinc-950 px-7
            text-sm font-semibold text-white
            transition hover:bg-blue-600
            disabled:cursor-not-allowed disabled:opacity-50
            sm:w-auto
          "
        >
          검색
        </button>
      </div>
    </form>
  );
}