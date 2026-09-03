"use client";

import { signup } from "@/src/api/auth";
import { useSignup } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");

  const { mutate, isPending, isSuccess, isError } = useSignup();

  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onSuccess: () => {
          router.push("/login");
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
        <input
          type="password"
          name="checkPassword"
          value={checkpassword}
          onChange={(e) => {
            setCheckpassword(e.target.value);
          }}
          placeholder="비밀번호 확인"
        />
        <button>회원가입</button>
      </form>
    </div>
  );
}
