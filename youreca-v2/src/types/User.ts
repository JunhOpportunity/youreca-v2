export interface User {
  createdAt: string | Date;
  profileImg: string | null;
  email: string;
  id: string;
  job?: string;
  nickname: string;
  company?: string | null;
  jobTitle?: string | null;
  position?: string | null;
  introduction?: string | null;
}

export type UpdateMyProfileRequest = {
  nickname: string;
  company: string | null;
  jobTitle: string | null;
  position: string | null;
  introduction: string | null;
};
