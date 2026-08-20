"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchUI() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/users?keyword=${keyword}`);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="사용자 명"
        />
        <button>검색</button>
      </form>
    </div>
  );
}
