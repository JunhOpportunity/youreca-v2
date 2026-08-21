import { http, HttpResponse } from "msw";
import { users } from "./data/users";
import { reviews } from "./data/reviews";

export const handlers = [
  http.get("/users/me", () => {
    return HttpResponse.json(users[0]);
  }),
  http.get("/users/1", () => {
    return HttpResponse.json(users);
  }),
  http.get("/reviews/1", () => {
    const userReviews = reviews.filter((review) => review.targetUserId === "1");
    return HttpResponse.json(userReviews);
  }),
];
