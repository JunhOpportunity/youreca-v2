"use client";

import { useSignup } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");

  const { mutate, isPending, isError } = useSignup();

  const router = useRouter();

  const passwordMismatch =
    checkpassword.length > 0 && password !== checkpassword;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== checkpassword) {
      return;
    }

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
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-700"
        >
          이메일
        </label>

        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          required
          className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-zinc-700"
        >
          비밀번호
        </label>

        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          required
          className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
        />
      </div>

      <div>
        <label
          htmlFor="checkPassword"
          className="mb-2 block text-sm font-medium text-zinc-700"
        >
          비밀번호 확인
        </label>

        <input
          id="checkPassword"
          type="password"
          name="checkPassword"
          value={checkpassword}
          onChange={(e) => setCheckpassword(e.target.value)}
          placeholder="비밀번호를 다시 입력해주세요"
          required
          className={`h-12 w-full rounded-xl border bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:ring-4 ${
            passwordMismatch
              ? "border-red-300 focus:border-red-500 focus:ring-red-50"
              : "border-zinc-200 focus:border-blue-500 focus:ring-blue-50"
          }`}
        />

        {passwordMismatch && (
          <p className="mt-2 text-xs text-red-500">
            비밀번호가 일치하지 않습니다.
          </p>
        )}
      </div>

      {isError && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          회원가입에 실패했습니다. 입력한 정보를 확인해주세요.
        </p>
      )}

      <button
        type="submit"
        disabled={isPending || passwordMismatch}
        className="h-12 w-full rounded-xl bg-zinc-950 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-zinc-300"
      >
        {isPending ? "가입 중..." : "회원가입"}
      </button>
    </form>
  );
}
