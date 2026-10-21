type VisibilityType = "public" | "organization" | "anonymous";

interface VisibilityProps {
  visibility: VisibilityType;
  setVisibility: React.Dispatch<React.SetStateAction<VisibilityType>>;
}

const options: {
  value: VisibilityType;
  title: string;
  description: string;
}[] = [
  {
    value: "public",
    title: "모두 공개",
    description: "누구나 이 평판을 볼 수 있어요.",
  },
  {
    value: "organization",
    title: "소속만 공개",
    description: "같은 소속의 사람에게만 보여요.",
  },
  {
    value: "anonymous",
    title: "완전 익명",
    description: "작성자의 정보 없이 공개돼요.",
  },
];

export function Visibility({ visibility, setVisibility }: VisibilityProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="sr-only">평판 공개 범위 선택</legend>

      {options.map((option) => {
        const selected = visibility === option.value;

        return (
          <label
            key={option.value}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
              selected
                ? "border-blue-500 bg-blue-50/70"
                : "border-zinc-200 bg-white hover:border-zinc-300"
            }`}
          >
            <input
              type="radio"
              name="visibility"
              value={option.value}
              checked={selected}
              onChange={() => setVisibility(option.value)}
              className="mt-1 h-4 w-4 accent-blue-600"
            />

            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-zinc-900">
                {option.title}
              </span>
              <span className="mt-1 block text-sm leading-5 text-zinc-500">
                {option.description}
              </span>
            </span>

            {selected && (
              <span className="text-sm font-semibold text-blue-600">
                선택됨
              </span>
            )}
          </label>
        );
      })}
    </fieldset>
  );
}
