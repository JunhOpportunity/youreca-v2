export interface User {
  createdAt: string | Date;
  profileImg: string;
  email: string;
  id: string;
  job?: string;
  nickname: string;
  company?: string;
  jobTitle?: string;
  position?: string;
  introduction?: string;
}
