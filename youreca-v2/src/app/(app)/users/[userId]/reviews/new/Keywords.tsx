interface KeywordsProps {
  selectedKeywords: string[];
  setSelectedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

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

export default function Keywords({
  selectedKeywords,
  setSelectedKeywords,
}: KeywordsProps) {
  const handleKeywordClick = (keyword: string) => {
    setSelectedKeywords((prev) => {
      if (prev.includes(keyword)) {
        return prev.filter((item) => item !== keyword);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, keyword];
    });
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-xs text-zinc-500">키워드 선택</span>
        <span className="text-xs font-medium text-blue-600">
          {selectedKeywords.length} / 3
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => {
          const isSelected = selectedKeywords.includes(keyword);
          const limitReached = selectedKeywords.length >= 3;

          return (
            <button
              type="button"
              key={keyword}
              aria-pressed={isSelected}
              onClick={() => handleKeywordClick(keyword)}
              disabled={limitReached && !isSelected}
              className={`rounded-full border px-3.5 py-2 text-sm font-medium transition ${
                isSelected
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-zinc-200 bg-white text-zinc-700 hover:border-blue-300 hover:bg-blue-50"
              } disabled:cursor-not-allowed disabled:opacity-50`}
            >
              {isSelected ? "✓ " : "+ "}
              {keyword}
            </button>
          );
        })}
      </div>
    </div>
  );
}
