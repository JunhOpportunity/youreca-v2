"use client";

import { Review } from "@/src/types/Review";
import { formatDate } from "@/src/utils/date";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <article className="border-b py-6">
      {/* 작성자 정보 */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200" />

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-gray-900">
              {review.writer.nickname}
            </h2>

            <span className="text-xs text-gray-400">
              {review.relationship}
            </span>
          </div>

          <p className="text-xs text-gray-500">
            {review.writer.job}
          </p>
        </div>
      </div>

      {/* 키워드 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {review.keywords.map((keyword) => (
          <span
            key={keyword}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* 리뷰 내용 */}
      <p className="mt-4 text-sm leading-7 text-gray-700">
        {review.content}
      </p>

      {/* 작성일 */}
      <time className="mt-4 block text-xs text-gray-400">
        {formatDate(review.createdAt)}
      </time>
    </article>
  );
}
