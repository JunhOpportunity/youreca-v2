"use client";

import ReviewCard from "./ReviewCard";
import { useReviews } from "@/src/hooks/useReviews";

type Props = {
  targetUserId: string;
};

export default function Reviews({ targetUserId }: Props) {
  const { data } = useReviews(targetUserId);

  return (
    <div>
      {data?.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </div>
  );
}
