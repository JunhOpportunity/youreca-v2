"use client";

import { useUser } from "@/src/hooks/useUser";

type Props = {
  userId: string;
};

export default function UserInfo({ userId }: Props) {
  const { data } = useUser(userId);

  return (
    <div>
      user Info Page
      <div>{data?.id}</div>
    </div>
  );
}
