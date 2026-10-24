import { http, HttpResponse } from "msw";
import { users } from "./data/users";
import { reviews } from "./data/reviews";
import { searchs } from "./data/searchs";
import { UpdateMyProfileRequest } from "../types/User";
import { experiences } from "./data/experiences";
import { Experience } from "../types/Experience";

type LoginRequest = {
  email: string;
  password: string;
};

let myProfile = { ...users[0] };

const currentUserId = '1';

export const handlers = [
  http.get("/users/me", () => {
    return HttpResponse.json(users[0]);
  }),
  http.get("/user/1", () => {
    return HttpResponse.json(users[0]);
  }),
  http.get("/users/1", () => {
    return HttpResponse.json(searchs);
  }),
  http.get("/reviews/1", () => {
    const userReviews = reviews.filter((review) => review.targetUserId === "1");
    return HttpResponse.json(userReviews);
  }),
  http.get("/reviews/2", () => {
    const userReviews = reviews.filter((review) => review.targetUserId === "2");
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
  
  // Profile MSW 핸들러
  http.get("/me/profile", async() => {
    return HttpResponse.json(users[0], {status : 200})
  }),
  http.patch("/me/profile", async({ request }) => {
    const body = (await request.json()) as Partial<UpdateMyProfileRequest>;

    myProfile = {
      ...myProfile,
      ...body,
    };

    return HttpResponse.json(myProfile, { status: 200 });

  }),
  http.post("/me/profile/image", async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("file");
  
    if (!(file instanceof File)) {
      return HttpResponse.json(
        { message: "이미지 파일이 필요합니다." },
        { status: 400 },
      );
    }
  
    // MSW에서 사용하는 임시 이미지 URL
    const profileImageUrl = "/mock/profile-image.jpg";
  
    myProfile = {
      ...myProfile,
      profileImg : profileImageUrl,
    };
  
    return HttpResponse.json(
      { profileImageUrl },
      { status: 200 },
    );
  }),
  
  // 프로필 이미지 삭제
  http.delete("/me/profile/image", () => {
    myProfile = {
      ...myProfile,
      profileImg: null,
    };
  
    return new HttpResponse(null, { status: 204 });
  }),

  // Experiences MSW 핸들러
  http.get("/me/experiences", () => {
    const myExperiences = experiences.filter(
      (experience) => experience.userId === currentUserId,
    );

    return HttpResponse.json(experiences[0], {status : 200});
  }),
  http.post("/me/experiences", async ({request}) => {
    const body = (await request.json())

    const newExperience: Experience = {
      id: crypto.randomUUID(),
      ...body,
    }

    // experiences = [...experiences, newExperience];

    return HttpResponse.json(newExperience, { status: 201 });
  }),
  http.patch("/me/experiences/:id", async ({params, request}) => {
    const id = String(params.id);
    const body = await request.json()

    const experience = experiences.find((item) => item.id === id);

    if (!experience) {
      return HttpResponse.json(
        { message: "경력을 찾을 수 없습니다." },
        { status: 404 },
      );
    }
  
    experiences = experiences.map((item) =>
      item.id === id ? { ...item, ...body } : item,
    );
  
    const updatedExperience = experiences.find((item) => item.id === id)!;
  
    return HttpResponse.json(updatedExperience, { status: 200 });
  }),
  http.delete("/me/experiences/:id", ({params}) => {
    const id = String(params.id);
    const exists = experiences.some((item) => item.id === id);
  
    if (!exists) {
      return HttpResponse.json(
        { message: "경력을 찾을 수 없습니다." },
        { status: 404 },
      );
    }
  
    experiences = experiences.filter((item) => item.id !== id);
  
    return new HttpResponse(null, { status: 204 });
  }),
  http.post("/auth/logout", () => {
    return new HttpResponse(null, { status: 204 });
  }),
];
