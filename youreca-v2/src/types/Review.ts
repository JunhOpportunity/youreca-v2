export interface Review {
  id: string;

  writer: {
    id: string;
    nickname: string;
    profileImg: string;
    job?: string;
  };

  targetUserId: string;
  content: string;
  createdAt: string;
}