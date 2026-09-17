"use client";

import { Search } from "@/src/types/Search";
import { User } from "@/src/types/User";
import Image from "next/image";
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
    <div className="rounded-xl border bg-white p-5">
      {/* 프로필 */}
      <div className="flex items-center gap-4">
        {/* <Image
          src={user.profileImg}
          alt={`${user.nickname} 프로필`}
          width={56}
          height={56}
          className="rounded-full object-cover"
        /> */}

        <div className="min-w-0">
          <h1 className="truncate font-semibold">{user.nickname}</h1>

          <p className="text-sm text-gray-500">{user.job}</p>
        </div>
      </div>

      {/* 평판 키워드 */}
      <div className="mt-5 flex flex-wrap gap-2">
        {user.keywords.slice(0, 4).map((keyword) => (
          <span
            key={keyword.name}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
          >
            {keyword.name} {keyword.count}
          </span>
        ))}
      </div>

      {/* 평판 수 + 버튼 */}
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-gray-500">평판 {user.reviewCount}개</span>

        <button onClick={onClick} className="text-sm font-medium">
          평판 보기 →
        </button>
      </div>
    </div>
  );
}
