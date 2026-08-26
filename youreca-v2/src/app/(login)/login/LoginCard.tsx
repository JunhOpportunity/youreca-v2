"use client";

import { useLogin } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isSuccess, isError } = useLogin();

  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/users");
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </form>
    </div>
  );
}
