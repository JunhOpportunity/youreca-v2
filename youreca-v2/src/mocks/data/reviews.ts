import { Review } from "@/src/types/Review";

export const reviews: Review[] = [
  {
    id: "review-1",
    targetUserId: "1",
    writer: {
      id: "2",
      nickname: "TEST1",
      profileImg: "",
      job: "학생",
    },
    content: "review-1 테스트 리뷰, 작성자 2",
    createdAt: "2026-08-21T10:00:00Z",
  },
  {
    id: "review-2",
    targetUserId: "2",
    writer: {
      id: "3",
      nickname: "TEST2",
      profileImg: "",
      job: "개발자",
    },
    content: "review-2 테스트 리뷰, 작성자 3",
    createdAt: "2026-08-21T10:00:00Z",
  },
  {
    id: "review-3",
    targetUserId: "1",
    writer: {
      id: "4",
      nickname: "TEST3",
      profileImg: "",
      job: "디자이너",
    },
    content: "review-2 테스트 리뷰, 작성자 4",
    createdAt: "2026-08-21T10:00:00Z",
  },
];
