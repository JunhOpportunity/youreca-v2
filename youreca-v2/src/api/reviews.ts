import { Review } from "../types/Review";

export async function getReviews(targetUserId:string): Promise<Review[]> {
  const res = await fetch(`/reviews/${targetUserId}`);

  if (!res.ok) {
    throw new Error("사용자 정보를 불러오지 못했습니다.");
  }

  return res.json();
}