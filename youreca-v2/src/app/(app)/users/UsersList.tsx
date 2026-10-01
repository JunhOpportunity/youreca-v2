"use client";

import { useUsers } from "@/src/hooks/useUsers";
import UserCard from "./UserCard";

type Props = {
  keyword: string;
};

export default function UsersList({ keyword }: Props) {
  const { data } = useUsers(keyword);

  return (
    <main className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-col-3">
        {data?.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </main>
  );
}
