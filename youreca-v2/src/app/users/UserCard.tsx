"use client";

import { User } from "@/src/types/User";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/users/${user.id}`);
  };

  return (
    <div>
      {/* <Image src={user.profileImg} alt="사용자 이미지" /> */}
      <h1>{user.nickname}</h1>
      <h2>{user.job}</h2>
      <p>{user.email}</p>
      <button onClick={onClick}>평판 작성하러 가기</button>
    </div>
  );
}
