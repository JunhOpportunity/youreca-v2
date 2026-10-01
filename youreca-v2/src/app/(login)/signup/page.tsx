import SignupCard from "./SignupCard";
import SocialLogin from "./SocialLogin";

export default function Signup() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600">
              YOURECA
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
              새로운 시작을 준비해요
            </h1>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              나만의 평판을 만들고
              <br />
              다른 사람의 시선으로 나를 발견해보세요.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <SignupCard />

            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs text-zinc-400">또는</span>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <SocialLogin />

            <div className="mt-6 text-center text-sm text-zinc-500">
              이미 계정이 있으신가요?{" "}
              <a
                href="/login"
                className="font-semibold text-zinc-900 transition-colors hover:text-blue-600"
              >
                로그인
              </a>
            </div>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-zinc-400">
            회원가입을 통해 YOURECA의 서비스를 이용할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
