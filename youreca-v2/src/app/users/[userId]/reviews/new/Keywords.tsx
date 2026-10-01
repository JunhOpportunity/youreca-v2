interface KeywordsProps {
  selectedKeywords: string[];
  setSelectedKeywords: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Keywords({
  selectedKeywords,
  setSelectedKeywords,
}: KeywordsProps) {
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

      if (prev.length >= 3) {
        return prev;
      }

      console.log(prev);

      return [...prev, keyword];
    });
  };
  return (
    <div>
      {keywords.map((keyword) => {
        const isSelected = selectedKeywords.includes(keyword);

        return (
          <button
            type="button"
            key={keyword}
            onClick={() => handleKeywordClick(keyword)}
            className={
              isSelected
                ? "border-2 border-blue-400 bg-blue-100 text-primary m-1 p-2 rounded-xl"
                : "border-2 border-gray-200 bg-white text-gray-700 m-1 p-2 rounded-xl"
            }
          >
            {keyword}
          </button>
        );
      })}
    </div>
  );
}
