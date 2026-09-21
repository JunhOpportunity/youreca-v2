import { Review } from "@/src/types/Review";

export const reviews: Review[] = [
  {
    id: "review-1",
    targetUserId: "1",
    writer: {
      id: "2",
      nickname: "TEST1",
      profileImg: "",
      job: "백엔드 개발자",
    },
    content: "팀원들과 적극적으로 소통하며 프로젝트를 진행했습니다.",
    keywords: ["소통", "팀워크"],
    isPublic: true,
    createdAt: "2026-08-25T10:00:00Z",
  },

  {
    id: "review-2",
    targetUserId: "1",
    writer: {
      id: "3",
      nickname: "TEST2",
      profileImg: "",
      job: "프론트엔드 개발자",
    },
    content: "맡은 업무를 책임감 있게 끝까지 수행했습니다.",
    keywords: ["책임감", "성실함"],
    isPublic: true,
    createdAt: "2026-08-23T10:00:00Z",
  },

  {
    id: "review-3",
    targetUserId: "2",
    writer: {
      id: "4",
      nickname: "TEST3",
      profileImg: "",
      job: "디자이너",
    },
    content: "팀원들과 원활하게 협업하고 적극적으로 의견을 공유했습니다.",
    keywords: ["팀워크", "소통", "열정"],
    isPublic: true,
    createdAt: "2026-08-21T10:00:00Z",
  },

  {
    id: "review-4",
    targetUserId: "1",
    writer: {
      id: "5",
      nickname: "TEST4",
      profileImg: "",
      job: "기획자",
    },
    content: "프로젝트에 대한 이해도가 높았습니다.",
    keywords: ["열정"],
    isPublic: false,
    createdAt: "2026-08-20T10:00:00Z",
  },
];
