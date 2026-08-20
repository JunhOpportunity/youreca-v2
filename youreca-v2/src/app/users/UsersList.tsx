"use client";

import { useUsers } from "@/src/hooks/useUsers";
import UserCard from "./UserCard";

type Props = {
  keyword: string;
};

export default function UsersList({ keyword }: Props) {
  const { data } = useUsers(keyword);

  return (
    <div>
      {data?.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}
