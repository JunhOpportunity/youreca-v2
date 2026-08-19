import { User } from "../types/User";

export async function getUser(userId : string): Promise<User> {
  const res = await fetch(`/users/${userId}`);

  if (!res.ok) {
    throw new Error("사용자 정보를 불러오지 못했습니다.");
  }

  return res.json();
}

export async function getUsers(keyword : string): Promise<User> {
  const res = await fetch(`/users/${keyword}`);

  if (!res.ok) {
    throw new Error("사용자 정보를 불러오지 못했습니다.");
  }

  return res.json();
}

export async function getCurrentUser(): Promise<User> {
  const res = await fetch("/users/me");

  if (!res.ok) {
    throw new Error("사용자 정보를 불러오지 못했습니다.");
  }

  return res.json();
}