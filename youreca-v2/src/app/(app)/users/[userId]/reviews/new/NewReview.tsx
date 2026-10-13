"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Keywords from "./Keywords";
import { Visibility } from "./Visibility";

type Props = {
  userId: string;
};

type VisibilityType = "public" | "organization" | "anonymous";

const relationshipOptions = [
  "직장 동료",
  "선후배",
  "팀 프로젝트 동료",
  "학교 친구",
  "동아리/스터디",
  "지인",
  "기타",
];

export default function NewReview({ userId }: Props) {
  const router = useRouter();

  const [relationship, setRelationship] = useState("");
  const [visibility, setVisibility] = useState<VisibilityType>("public");
  const [content, setContent] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!relationship) {
      setError("작성자와의 관계를 선택해주세요.");
      return;
    }

    if (!content.trim()) {
      setError("평판 내용을 입력해주세요.");
      return;
    }

    if (selectedKeywords.length === 0) {
      setError("평판 키워드를 하나 이상 선택해주세요.");
      return;
    }

    const payload = {
      targetUserId: userId,
      relationship,
      visibility,
      content: content.trim(),
      keywords: selectedKeywords,
    };

    setIsSubmitting(true);

    try {
      // TODO: 실제 평판 등록 API 또는 TanStack Query mutation 연결
      console.log("평판 등록 요청:", payload);

      // 실제 API 연결 후 성공 응답을 받으면 상세 페이지로 이동합니다.
      // router.push(`/users/${userId}`);
    } catch {
      setError("평판 등록에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        <div className="mb-8">
          <button
            type="button"
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-950"
          >
            <span aria-hidden="true">←</span>
            이전 페이지
          </button>

          <p className="mb-3 text-sm font-semibold text-blue-600">
            WRITE A REVIEW
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            평판 작성하기
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500 sm:text-base">
            함께했던 경험을 바탕으로 상대방의 장점과 강점을 알려주세요.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
            <div>
              <label
                htmlFor="relationship"
                className="mb-2 block text-sm font-semibold text-zinc-950"
              >
                어떤 관계인가요?
                <span className="ml-1 text-blue-600">*</span>
              </label>

              <select
                id="relationship"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                required
                className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="">관계를 선택해주세요</option>
                {relationshipOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h2 className="mb-1 text-sm font-semibold text-zinc-950">
                평판 공개 범위
              </h2>
              <p className="mb-3 text-sm text-zinc-500">
                평판을 누가 볼 수 있을지 선택해주세요.
              </p>

              <Visibility
                visibility={visibility}
                setVisibility={setVisibility}
              />
            </div>

            <div>
              <label
                htmlFor="review-content"
                className="mb-2 block text-sm font-semibold text-zinc-950"
              >
                어떤 경험을 하셨나요?
                <span className="ml-1 text-blue-600">*</span>
              </label>

              <textarea
                id="review-content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="함께했던 경험이나 상대방의 장점, 인상 깊었던 점을 자유롭게 작성해주세요."
                required
                maxLength={2000}
                className="min-h-48 w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm leading-7 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />

              <p className="mt-2 text-right text-xs text-zinc-400">
                {content.length} / 2000자
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-zinc-950">
                어떤 장점이 있었나요?
                <span className="ml-1 text-blue-600">*</span>
              </h2>
              <p className="mb-3 mt-1 text-sm text-zinc-500">
                상대방을 잘 나타내는 키워드를 최대 3개 선택해주세요.
              </p>

              <Keywords
                selectedKeywords={selectedKeywords}
                setSelectedKeywords={setSelectedKeywords}
              />
            </div>
          </section>

          {error && (
            <p
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => router.back()}
              disabled={isSubmitting}
              className="h-12 rounded-xl border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              취소
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "등록 중..." : "평판 등록하기"}
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
