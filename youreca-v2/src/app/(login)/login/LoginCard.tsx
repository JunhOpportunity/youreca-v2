"use client";

import { useLogin } from "@/src/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError } = useLogin();

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
    <main className="min-h-screen bg-zinc-50">
      {/* Login */}
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              YOURECA
            </p>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-950">
              다시 만나서 반가워요
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              나만의 평판 페이지를 확인하려면
              <br />
              로그인해주세요.
            </p>
          </div>

          {/* Card */}
          <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm sm:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  이메일
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일을 입력해주세요"
                  autoComplete="email"
                  required
                  className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-zinc-800"
                >
                  비밀번호
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="current-password"
                  required
                  className="h-12 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Error */}
              {isError && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  이메일 또는 비밀번호를 확인해주세요.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="h-12 w-full rounded-xl bg-zinc-950 text-sm font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:bg-zinc-300"
              >
                {isPending ? "로그인 중..." : "로그인"}
              </button>
            </form>

            {/* Sign up */}
            <div className="mt-7 border-t border-zinc-100 pt-6 text-center">
              <p className="text-sm text-zinc-500">
                아직 계정이 없으신가요?
              </p>

              <a
                href="/signup"
                className="mt-2 inline-block text-sm font-semibold text-blue-600 transition hover:text-blue-700"
              >
                회원가입
              </a>
            </div>
          </div>

          {/* Back */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-xs text-zinc-400 transition hover:text-zinc-700"
            >
              ← 메인으로 돌아가기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
