"use client";

import Button from "@/src/components/common/Button";
import Input from "@/src/components/common/Input";
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
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="이메일"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="비밀번호"
        />
        <Button type="submit">로그인</Button>
      </form>
    </div>
  );
}
