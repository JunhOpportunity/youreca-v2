"use client";

import { useState } from "react";

export default function NewReview({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  // const { userId } = await params;
  const [selectedKeyword, setSelectedKeywords] = useState<string[]>([]);

  const options = [
    "직장 동료",
    "선후배",
    "팀 프로젝트 동료",
    "학교 친구",
    "동아리/스터디",
    "지인",
    "기타",
  ];

  const keywords = [
    "책임감",
    "성실함",
    "꼼꼼함",
    "협업",
    "커뮤니케이션",
    "배려",
    "문제해결",
    "빠른 습득",
    "주도적",
    "리더십",
    "창의적",
    "긍정적",
  ];

  

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeywords((prev) => {
      if (prev.includes(keyword)) {
        return prev.filter((item) => item !== keyword);
      }

      if (prev.length > 3) {
        return prev;
      }

      console.log(prev)

      return [...prev, keyword];
    });
  };

  return (
    <div>
      <div>
        <select>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
        <div>
          <input type="checkbox" id="public" value="public" />
          <label htmlFor="public">모두 공개</label>
          <input type="checkbox" id="organization" value="organization" />
          <label htmlFor="organization">소속만 공개</label>
          <input type="checkbox" id="anonymous" value="anonymous" />
          <label htmlFor="anonymous">완전 익명</label>
        </div>
        <div>
          <textarea placeholder="이 사람과 함께했던 경험을 자유롭게 작성해주세요."></textarea>
        </div>
        <div>
          {keywords.map((keyword) => {
            const isSelected = selectedKeyword.includes(keyword);

            return (
              <button
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
                className={isSelected ? "selected" : ""}
              >
                {keyword}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
