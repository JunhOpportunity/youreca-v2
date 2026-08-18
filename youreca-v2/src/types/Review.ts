export interface Review {
  id: string;
  targetIserId: string;
  writeUserId: string;
  nickname: string;
  content: string;
  createdAt: Date;
}
