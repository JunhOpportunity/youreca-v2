"use client";

import { Review } from "@/src/types/Review";

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <div>
      {review.writer.nickname}
      {review.writer.job}
      {review.content}
      {review.createdAt}
    </div>
  );
}
