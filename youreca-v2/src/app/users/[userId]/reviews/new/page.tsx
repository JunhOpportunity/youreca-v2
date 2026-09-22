"use client";

import { useState } from "react";
import Keywords from "./Keywords";
import { Visibility } from "./Visibility";

export default function NewReview({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  // const { userId } = await params;

  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<
    "public" | "organization" | "anonymous"
  >("public");

  const options = [
    "직장 동료",
    "선후배",
    "팀 프로젝트 동료",
    "학교 친구",
    "동아리/스터디",
    "지인",
    "기타",
  ];

  return (
    <div>
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-900">
          어떤 관계인가요?
        </label>
        <select
          className="
            w-full
            rounded-lg
            border border-gray-200
            bg-white
            px-4 py-3
            text-sm text-gray-900
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/10
          "
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <Visibility visibility={visibility} setVisibility={setVisibility} />
        <div>
          <textarea
            placeholder="이 사람과 함께했던 경험을 자유롭게 작성해주세요."
            className="
              min-h-[180px]
              w-full
              resize-none
              rounded-lg
              border border-gray-200
              bg-white
              px-4 py-3
              text-sm
              leading-6
              text-gray-900
              outline-none
              placeholder:text-gray-400
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/10
            "
          />
        </div>
        <Keywords
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
        />
      </div>
    </div>
  );
}
