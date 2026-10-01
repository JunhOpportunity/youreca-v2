export interface Search {
  id: number;
  nickname: string;
  job: string;
  profileImg: string;
  reviewCount: number;
  keywords: {
    name: string;
    count: number;
  }[];
}
