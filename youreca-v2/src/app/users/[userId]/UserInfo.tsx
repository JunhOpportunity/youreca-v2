"use client";

import { useUser } from "@/src/hooks/useUser";

type Props = {
  userId: string;
};

export default function UserInfo({ userId }: Props) {
  const { data } = useUser(userId);

  if (!data) return null;

  return (
    <section className="border-b pb-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-gray-200">
          {data.profileImg && (
            <img
              src={data.profileImg}
              alt={`${data.nickname} 프로필 이미지`}
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">{data.nickname}</h1>

          {data.job && <p className="mt-1 text-sm text-gray-500">{data.job}</p>}
        </div>
      </div>
    </section>
  );
}
