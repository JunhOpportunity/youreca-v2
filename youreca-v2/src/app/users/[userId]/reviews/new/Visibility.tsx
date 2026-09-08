interface VisibilityProps {
  visibility: "public" | "organization" | "anonymous";
  setVisibility: React.Dispatch<
    React.SetStateAction<"public" | "organization" | "anonymous">
  >;
}

// export function Visibility({ visibility, setVisibility }: VisibilityProps) {
//   return (
//     <div>
//       <input
//         type="radio"
//         name="visibility"
//         id="public"
//         value="public"
//         checked={visibility === "public"}
//         onChange={(e) => setVisibility(e.target.value as typeof visibility)}
//       />
//       <label htmlFor="public">모두 공개</label>
//       <input
//         type="radio"
//         name="visibility"
//         id="organization"
//         value="organization"
//         checked={visibility === "organization"}
//         onChange={(e) => setVisibility(e.target.value as typeof visibility)}
//       />
//       <label htmlFor="organization">소속만 공개</label>
//       <input
//         type="radio"
//         name="visibility"
//         id="anonymous"
//         value="anonymous"
//         checked={visibility === "anonymous"}
//         onChange={(e) => setVisibility(e.target.value as typeof visibility)}
//       />
//       <label htmlFor="anonymous">완전 익명</label>
//     </div>
//   );
// }

export function Visibility({ visibility, setVisibility }: VisibilityProps) {
  return (
    <div className="space-y-3">
      <label
        htmlFor="public"
        className={`
          flex cursor-pointer items-start gap-3 rounded-xl border p-4
          transition-colors
          ${
            visibility === "public"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }
        `}
      >
        <input
          type="radio"
          name="visibility"
          id="public"
          value="public"
          checked={visibility === "public"}
          onChange={(e) => setVisibility(e.target.value as typeof visibility)}
          className="mt-1 h-4 w-4 accent-blue-500"
        />

        <div>
          <p className="text-sm font-medium text-gray-900">모두 공개</p>
          <p className="mt-1 text-xs text-gray-500">
            누구나 이 평판을 볼 수 있어요.
          </p>
        </div>
      </label>

      <label
        htmlFor="organization"
        className={`
          flex cursor-pointer items-start gap-3 rounded-xl border p-4
          transition-colors
          ${
            visibility === "organization"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }
        `}
      >
        <input
          type="radio"
          name="visibility"
          id="organization"
          value="organization"
          checked={visibility === "organization"}
          onChange={(e) => setVisibility(e.target.value as typeof visibility)}
          className="mt-1 h-4 w-4 accent-blue-500"
        />

        <div>
          <p className="text-sm font-medium text-gray-900">소속만 공개</p>
          <p className="mt-1 text-xs text-gray-500">
            같은 소속의 사람에게만 보여요.
          </p>
        </div>
      </label>

      <label
        htmlFor="anonymous"
        className={`
          flex cursor-pointer items-start gap-3 rounded-xl border p-4
          transition-colors
          ${
            visibility === "anonymous"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }
        `}
      >
        <input
          type="radio"
          name="visibility"
          id="anonymous"
          value="anonymous"
          checked={visibility === "anonymous"}
          onChange={(e) => setVisibility(e.target.value as typeof visibility)}
          className="mt-1 h-4 w-4 accent-blue-500"
        />

        <div>
          <p className="text-sm font-medium text-gray-900">완전 익명</p>
          <p className="mt-1 text-xs text-gray-500">
            작성자의 정보 없이 공개돼요.
          </p>
        </div>
      </label>
    </div>
  );
}
