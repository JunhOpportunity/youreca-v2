"use client";

import { Review } from "@/src/types/Review";
import { formatDate } from "@/src/utils/date";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <article className="py-7 sm:py-8">
      {/* 작성자 정보 */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-semibold text-zinc-600">
          {review.writer.nickname.slice(0, 1)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-sm font-semibold text-zinc-950">
              {review.writer.nickname}
            </h3>

            <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
              {review.relationship}
            </span>
          </div>

          {review.writer.job && (
            <p className="mt-1 text-xs text-zinc-500">{review.writer.job}</p>
          )}
        </div>
      </div>
      {/* 키워드 */}
      {review.keywords.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {review.keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
      {/* 리뷰 내용 */}
      <p className="mt-5 whitespace-pre-wrap break-words text-sm leading-7 text-zinc-700 sm:text-base sm:leading-8">
        {review.content}
      </p>
      {/* 작성일 */}
      <time
        dateTime={review.createdAt}
        className="mt-5 block text-xs text-zinc-400"
      >
        {formatDate(review.createdAt)}
      </time>
    </article>
  );
}
