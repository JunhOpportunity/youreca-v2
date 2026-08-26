import { http, HttpResponse } from "msw";
import { users } from "./data/users";
import { reviews } from "./data/reviews";

type LoginRequest = {
  email: string;
  password: string;
};

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
  http.post("/auth/login", async ({ request }) => {
    const body = (await request.json()) as LoginRequest;

    if (body.email !== "test@test.com" || body.password !== "12345678") {
      return HttpResponse.json(
        {
          message: "이메일 또는 비밀번호가 올바르지 않습니다.",
        },
        { status: 401 }
      );
    }

    return HttpResponse.json(users[0]);
  }),
  http.post("/auth/signup", async ({ request }) => {
    const body = await request.json();

    return HttpResponse.json(users[0], { status: 201 });
  }),
];
