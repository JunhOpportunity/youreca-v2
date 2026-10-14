"use client";

export default function SocialLogin() {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="flex h-12 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
      >
        Google로 시작하기
      </button>

      <button
        type="button"
        className="flex h-12 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50"
      >
        Github로 시작하기
      </button>
    </div>
  );
}
