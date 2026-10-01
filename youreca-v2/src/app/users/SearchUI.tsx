"use client";

import Button from "@/src/components/common/Button";
import Input from "@/src/components/common/Input";
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
      <form onSubmit={onSubmit} className="flex gap-2">
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="사용자 명"
          className="w-auto px-6"
        />
        <Button type="submit" className="flex-1">검색</Button>
      </form>
    </div>
  );
}
