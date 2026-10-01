"use client";

import { useUsers } from "@/src/hooks/useUsers";
import UserCard from "./UserCard";

type Props = {
  keyword?: string;
};

export default function UsersList({ keyword }: Props) {
  const { data } = useUsers(keyword ?? "");

  if (!data?.length) {
    return (
      <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-lg">
          ?
        </div>

        <h3 className="mt-4 text-base font-semibold text-zinc-950">
          검색 결과가 없습니다
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          다른 이름이나 닉네임으로 검색해보세요.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}