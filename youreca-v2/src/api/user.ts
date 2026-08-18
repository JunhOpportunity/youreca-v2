import { User } from "../types/User";

export async function getUser(): Promise<User> {
  const res = await fetch("/users/me");

  if (!res.ok) {
    throw new Error("사용자 정보를 불러오지 못했습니다.");
  }

  return res.json();
}
