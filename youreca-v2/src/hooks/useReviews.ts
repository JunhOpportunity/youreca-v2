import { useQuery } from "@tanstack/react-query";
import { Review } from "../types/Review";
import { getReviews } from "../api/reviews";

export function useReviews(targetUserId: string) {
  return useQuery<Review[]>({
    queryKey: ["reviews", targetUserId],
    queryFn: () => getReviews(targetUserId),
    staleTime: 1000 * 60,
  });
}
